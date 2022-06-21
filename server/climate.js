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

getClimateData();

function getClimateData() {
  timer = setInterval(async function() {
    var response = await fetch('https://dashboard.cphsense.com/api/v2/groups/136/latest', {
        method: 'get',
        headers: {
        'Accept' : 'application/json',
        'Authorization' : `Bearer ` + secrets.API
        }
    });
var result = await response.json();

console.log(result.data);
  }, 5000);
}

//todo hardcoded dummy data met apart id

//todo binnenkomende data verwerken

//todo schaal 1-10

export default app;