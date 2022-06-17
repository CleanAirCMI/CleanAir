// server/index.js
import fetch from 'node-fetch';
import path from 'path';
import express from 'express';
import secrets from './config/secrets.json' assert {type: 'json'};


const PORT = process.env.PORT || 3001;

const app = express();

// const response = await fetch('https://nodejs.org/api/documentation.json', {
const response = await fetch('https://dashboard.cphsense.com/api/v2/groups/136/latest', {
        method: 'get',
        headers: {
        'Accept' : 'application/json',
        'Authorization' : `Bearer ` + secrets.API
        }
    });
const data = await response.json();

console.log(data);

//todo hardcoded dummy data met apart id

//todo binnenkomende data verwerken

//todo schaal 1-10

app.get("/api", (req, res) => {
    res.json(data);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

