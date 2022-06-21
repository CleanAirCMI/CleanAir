// server/index.js
import fetch from 'node-fetch';
import path from 'path';
import express from 'express';
import secrets from './config/secrets.json' assert {type: 'json'};

import reservationRouter from './routes/reservations.js';
import studentRouter from './routes/students.js';
import classroomRouter from './routes/classrooms.js';


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
const result = await response.json();

console.log(result.data);

//todo hardcoded dummy data met apart id

//todo binnenkomende data verwerken

//todo schaal 1-10

// kan weg
app.get("/api", (req, res) => {
    res.json(result);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use('/reservations', reservationRouter);
app.use('/students', studentRouter);
app.use('/classrooms', classroomRouter);