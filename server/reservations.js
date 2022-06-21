import express from 'express';
import db from './config/db.js';
import cors from 'cors';

const app = express();
const  PORT = 3001;
app.use(cors());
app.use(express.json())

// Route to get all reservation
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM reservations", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one reservation
app.get("/api/getFromId/:reservation_id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM reservations WHERE reservation_id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the reservation
app.post('/api/create', (req,res)=> {

const datum = req.body.datum;
const tijd = req.body.tijd;

db.query("INSERT INTO reservations (date, time,) VALUES (?,?,)",[datum,tijd], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to delete a reservation

app.delete('/api/delete/:reservation_id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM reservations WHERE reservation_id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})