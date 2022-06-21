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

getClassrooms();

function getClassrooms() {
  timer = setInterval(async function() {

    db.query("SELECT * FROM classrooms INNER JOIN locations ON classrooms.location_id = locations.location_id;", (err,res)=>{
    if(err) {
        console.log(err)
        } 
        res.forEach(function (classrooms, id) {
            // console.log(classrooms.box_id);
            if (classrooms.box_id !== "") {
                console.log(classrooms.box_id);
                getClimateData(classrooms.box_id)
                .then((data) => {
                    console.log(data);

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

//todo hardcoded dummy data met apart id

//todo binnenkomende data verwerken

//todo schaal 1-10

export default app;