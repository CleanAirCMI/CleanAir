// server/index.js
import fetch from 'node-fetch';
import path from 'path';
import express from 'express';
import secrets from './config/secrets.json' assert {type: 'json'};
import db from './config/db.js';
import cors from 'cors';


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

console.log(result.data[1]);

//todo hardcoded dummy data met apart id

//todo binnenkomende data verwerken

//todo schaal 1-10

//kan weg
app.get("/api", (req, res) => {
    res.json(data);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


  // Reservations
  app.use(cors());
  app.use(express.json())

    //kan weg
    // Route to get all reservation
    app.get("/api/reservations/get", (req,res)=>{
    db.query("SELECT * FROM reservations", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

    //kan weg
    // Route to get one reservation
    app.get("/api/reservations/getFromId/:reservation_id", (req,res)=>{

    const reservation_id = req.params.reservation_id;
    db.query("SELECT * FROM reserveringen WHERE reservation_id = ?", reservation_id, 
    (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });

    // Route for creating the reservation
    app.post('/api/reservation/create', (req,res)=> {

    const date = req.body.date;
    const time = req.body.time;

    db.query("INSERT INTO reservations (date, time,) VALUES (?,?,)",[date,time], (err,result)=>{
      if(err) {
      console.log(err)
      } 
      console.log(result)
    });   })

    // Route to delete a reservation
    // kan weg
    app.delete('/api/delete/:reservation_id',(req,res)=>{
    const reservation_id = req.params.reservation_id;

    db.query("DELETE FROM reservation WHERE reservation_id= ?", reservation_id, (err,result)=>{
    if(err) {
    console.log(err)
            } }) })

  // Students
    //kan weg
    // Route to get all students
    app.get("/api/students/get", (req,res)=>{
      console.log('test');
    db.query("SELECT * FROM students", (err,result)=>{
      if(err) {
      console.log(err)
      } 
    res.send(result)
    console.log('test2');
    });   });
    //kan weg
    // Route to get one student
    app.get("/api/students/getFromId/:student_id", (req,res)=>{

    const student_id = req.params.student_id;
    db.query("SELECT * FROM students WHERE student_id = ?", student_id, 
    (err,result)=>{
      if(err) {
      console.log(err)
      } 
      res.send(result)
      });   });
    // Route for creating the student
    app.post('/api/student/create', (req,res)=> {

    const studentnumber = req.body.studentnumber;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    db.query("INSERT INTO students (studentnumber, firstname, lastname, email) VALUES (?,?,?,?)",[studentnumber,firstname,lastname,email], (err,result)=>{
    if(err) {
    console.log(err)
    } 
    console.log(result)
    });   })

  // Rooms
    // Route to get all rooms
    app.get("/api/rooms/get", (req,res)=>{
    db.query("SELECT * FROM rooms INNER JOIN locations ON rooms.location_id = locations.location_id;", (err,result)=>{
      if(err) {
      console.log(err)
      } 
    res.send(result)
    });   });

    // Route to get one room
    app.get("/api/rooms/getFromId/:room_id", (req,res)=>{

    const room_id = req.params.room_id;
    db.query("SELECT * FROM rooms WHERE room_id = ?", room_id, 
    (err,result)=>{
      if(err) {
      console.log(err)
      } 
      res.send(result)
      });   });
    
    //kan weg
    // Route for creating the room
    app.post('/api/rooms/create', (req,res)=> {

    const name = req.body.name;
    const image = req.body.image;
    const floor = req.body.floor;
    const total_seats = req.body.total_seats;

    db.query("INSERT INTO rooms (name, image, floor, total_seats) VALUES (?,?,?,?)",[name,image,floor,total_seats], (err,result)=>{
    if(err) {
    console.log(err)
    } 
    console.log(result)
    });   })
