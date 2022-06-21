import express from 'express';
import db from '../config/db.js';
import cors from 'cors';

const router = express.Router()
const app = express();

app.use(cors());
app.use(express.json())

  // Students
    //kan weg
    // Route to get all students
    app.get("/get", (req,res)=>{
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
    app.get("/get/:student_id", (req,res)=>{

    const student_id = req.params.student_id;
    db.query("SELECT * FROM students WHERE student_id = ?", student_id, 
    (err,result)=>{
      if(err) {
      console.log(err)
      } 
      res.send(result)
      });   });
    // Route for creating the student
    app.post('/create', (req,res)=> {

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

export default app;