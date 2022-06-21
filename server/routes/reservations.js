import express from 'express';
import db from '../config/db.js';
import cors from 'cors';

const router = express.Router()
const app = express();

app.use(cors());
app.use(express.json())

    //kan weg
    // Route to get all reservation
    app.get("/get", (req,res)=>{
    db.query("SELECT * FROM reservations", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

    //kan weg
    // Route to get one reservation
    app.get("/get/:reservation_id", (req,res)=>{

    const reservation_id = req.params.reservation_id;
    db.query("SELECT * FROM reserveringen WHERE reservation_id = ?", reservation_id, 
    (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });

    // Route for creating the reservation
    app.post('/create', (req,res)=> {

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
    app.delete('/delete/:reservation_id',(req,res)=>{
    const reservation_id = req.params.reservation_id;

    db.query("DELETE FROM reservation WHERE reservation_id= ?", reservation_id, (err,result)=>{
    if(err) {
    console.log(err)
            } }) })

export default app;