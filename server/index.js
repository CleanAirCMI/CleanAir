// server/index.js
import express from 'express';
import reservationRouter from './routes/reservations.js';
import studentRouter from './routes/students.js';
import classroomRouter from './routes/classrooms.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use('/reservations', reservationRouter);
app.use('/students', studentRouter);
app.use('/classrooms', classroomRouter);
