import express from 'express';
import db from '../config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser'

const router = express.Router()
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.text({type: '*/*'}));
app.use(bodyParser.json());
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
    db.query("SELECT * FROM reserveringen WHERE reservation_id = " + reservation_id, 
    (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });

    // Route for creating the reservation
    app.post('/create', (req,res)=> {
    
        const body = JSON.parse(req.body);
        const student_id = body.student_id;
        const room_id = body.room_id;
        const datetime = body.datetime;
        const seat_amount = body.seat_amount;


        db.query("INSERT INTO reservations (student_id, room_id, datetime, seat_amount) VALUES (?,?,?,?)",[student_id, room_id, datetime,seat_amount], (err,result)=>{
        if(err) {
        console.log(err)
        res.send(err);
        } 
        console.log(result)
        res.send(result);
        });   
    })

    // Route to delete a reservation
    // kan weg
    app.delete('/delete/:id',(req,res)=>{
    const reservation_id = req.params.reservation_id;

    db.query("DELETE FROM reservations WHERE id=" + reservation_id, (err,result)=>{
    if(err) {
    console.log(err)
            } }) })

export default app;