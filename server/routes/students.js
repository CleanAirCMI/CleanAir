import express from 'express';
import db from '../config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser'

const router = express.Router()
const app = express();



app.use(bodyParser.urlencoded());
app.use(cors());
app.use(express.json())

  // Students
    //kan weg
    // Route to get all students
    app.get("/get", (req,res)=>{
    
      db.query("SELECT * FROM students", (err,result)=>{
      if(err) {
      console.log(err)
      } 
    res.send(result)
    });   });
    //kan weg
    // Route to get one student
    app.get("/get/:student_id", (req,res)=>{

    const student_id = req.params.student_id;
    db.query("SELECT * FROM students WHERE student_id = " + student_id, 
    (err,result)=>{
      if(err) {
      console.log(err)
      } 
      res.send(result)
      });   });

    // Route for creating the student
    app.post('/create', (req,res)=> {
      const student_id = req.body.student_id;
      const studentnumber = req.body.studentnumber;
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;

      // const { student_id, studentnumber, firstname, lastname, email} = req.body;

      console.log(student_id, studentnumber, firstname, lastname, email);
      
      db.query("INSERT INTO students (student_id, studentnumber, firstname, lastname, email) VALUES (?,?,?,?,?)",[student_id, studentnumber, firstname,lastname, email], (err,result)=>{
      if(err) {
      console.log(err);
      res.send(err);
      } 
      console.log(result);
      res.send(result);
      });   })

export default app;