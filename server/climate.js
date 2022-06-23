import express from 'express';
import fetch from 'node-fetch';
import db from './config/db.js';
import cors from 'cors';
import secrets from './config/secrets.json' assert {type: 'json'};

const router = express.Router()
const app = express();

app.use(cors());
app.use(express.json())

var timer = 0;
var co2Score
var particleScore
var temperatureScore
var humidityScore
var noiseScore
var climateScore

getClassrooms();

function getClassrooms() {
  timer = setInterval(async function() {

    db.query("SELECT * FROM classrooms INNER JOIN locations ON classrooms.location_id = locations.location_id;", (err,res)=>{
    if(err) {
        console.log(err)
        } 
        res.forEach(function (classrooms, id) {
            if (classrooms.box_id !== "") {
                getClimateData(classrooms.box_id)
                .then((data) => {
                    if (data) {

                        //co2 data verwerken
                        var co2 = data.sensors[0].value;

                        if (co2 < 600 ) {
                            co2Score = 100;
                        } else if (co2 > 1000) {
                            co2Score = 0;
                        } else {
                            co2Score = (-0.25 * co2 + 250);
                        } 
                        console.log(`co2score is ` + co2Score + ` de co2 is ` + co2);

                        //particles data verwerken
                        var particle = data.sensors[1].value;

                        if (particle < 0){
                            particleScore = 100;
                        } else if (particle > 50 ) {
                            particleScore = 0;
                        } else {
                            particleScore = (-2 * particle + 100);
                        }
                        console.log(`particleScore is ` + particleScore + ` de particle is ` + particle);

                        //temperature data verwerken
                        var temperature = data.sensors[4].value;

                        if (temperature < 0 || temperature > 34 ){
                            temperatureScore = 0;
                        } else if (temperature < 20 ) {
                            temperatureScore = (10 * temperature -100);
                        } else if (temperature > 24) {
                            temperatureScore = ((-10) * temperature + 340);
                        } else {
                            temperatureScore = 100; 
                        }
                        console.log(`temperatureScore is ` + temperatureScore + ` de temperatuur is ` + temperature);

                        //humidity data verwerken
                        var humidity = data.sensors[5].value;

                        if (humidity < 0 || humidity > 90 ){
                            humidityScore = 0;
                        } else if (humidity < 25 ) {
                            humidityScore = (2.6 * humidity);
                        } else if (humidity > 65 ) {
                            humidityScore = (-4 * humidity + 360);
                        } else {
                            humidityScore = 100; 
                        }
                        console.log(`humidityScore is ` + humidityScore + ` de luchtvochtigheid is ` + humidity);

                        //noise data verwerken
                        var noise = data.sensors[2].value;

                        if (noise < 25){
                            noiseScore = 100;
                        } else if (noise > 85 ) {
                            noiseScore = 0;
                        } else {
                            noiseScore = (-(5/3) * noise + (425/3));
                        }
                        console.log(`noiseScore is ` + noiseScore + ` de noise is ` + noise);

                        climateScore = ((co2Score + particleScore + temperatureScore + humidityScore + noiseScore) / 5 ) / 10;

                        //sql update
                        db.query(`UPDATE classrooms SET climate_score = (?), co2 = (?), particles = (?), noise = (?), temperature = (?), humidity = (?) WHERE box_id='${classrooms.box_id}';`,[climateScore, co2, particle, noise, temperature, humidity], (err,result)=>{
                            if(err) {
                            console.log(err)
                            } 
                            console.log(result)
                          });
                    }; 
                });
            }
        });
    });
  }, 5000);
}

async function getClimateData(id) {
    var response = await fetch(`https://dashboard.cphsense.com/api/v2/devices/` + id + `/latest`, {
        method: 'get',
        headers: {
        'Accept' : 'application/json',
        'Authorization' : `Bearer ` + secrets.API
        }
    });
    var result = await response.json();

    return(result.data);
}

export default app;