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

// getClassrooms();

function getClassrooms() {
  timer = setInterval(async function() {

    db.query("SELECT * FROM classrooms INNER JOIN locations ON classrooms.location_id = locations.location_id;", (err,res)=>{
    if(err) {
        console.log(err)
        } 
        res.forEach(function (classrooms, id) {
            if (classrooms.box_id !== "") {
                console.log(classrooms.box_id);
                getClimateData(classrooms.box_id)
                .then((data) => {
                    db.query(`UPDATE classrooms SET co2 = (?), particles = (?), noise = (?), temperature = (?), humidity = (?) WHERE box_id='${classrooms.box_id}';`,[data.sensors[0].value, data.sensors[1].value, data.sensors[2].value, data.sensors[4].value, data.sensors[5].value], (err,result)=>{
                        if(err) {
                        console.log(err)
                        } 
                        console.log(result)
                      });
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

//todo schaal 1-10

export default app;