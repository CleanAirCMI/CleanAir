import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Reserve() {
  const roomId = useParams().roomId;
  const [data, setData] = React.useState(null);

  const [firstName, setFirstName] = useState("Ali");
  const [lastName, setLastName] = useState("Shahid");
  const [studentNumber, setStudentNumber] = useState("0949886");
  const [seats, setSeats] = useState("0");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = () => {
    fetch("http://localhost:3001/classrooms/get/"+roomId)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log('error'));
  }

  useEffect(() => {
    fetchData();
  }, []); 

  let handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      student_id: e.target.student_number.value,
      room_id: e.target.room_id.value,
      datetime: e.target.date_time.value,
      seat_amount: e.target.seats.value
    }
    fetch("http://localhost:3001/reservations/create", {
      method: "POST",
      body: JSON.stringify(body),
    })
    .then((res) => res.json())
    .then(setMessage("Reservering geplaatst"))
    .catch(error => {console.log(error)})
  };

  useEffect(() => {
    document.title = `Reserveren | CleanAir`;
  }, []);
  
  return (
    <div className="Reserve">
      <header className="App-header bg-white flex flex-row items-center px-4 md:px-8 justify-between drop-shadow-md">
        <Link to="/"><h1 className='text-4xl md:text-5xl text-emerald-900 font-normal leading-normal mt-0 mb-2 text-center'>Werkplekkie</h1></Link>
        <span className="text-emerald-900 text-lg">Ingelogd als Ali (0949886)</span>
      </header>
      <section className='w-full h-full py-8 bg-stone-300'>
        <div className='rounded-xl mx-4 md:w-1/2 md:mx-auto p-8 drop-shadow-lg bg-white'>
          <h2 className='text-4xl font-medium text-emerald-900 leading-normal mt-0'>Reserveren</h2>
          {data && data.map((element)=> (
            <div className='rounded-xl bg-white border border-slate-300 flex flex-row my-2 text-emerald-900 items-center w-full'>
              <div>
                <img alt="Classroom" className='object-cover rounded-l-xl w-32' src={process.env.PUBLIC_URL+'/img/'+element.image}></img>
              </div>
              <div className='ml-4'>
                <h3 className='text-2xl'>Lokaal {element.name}</h3>
                <span>{element.location_name}, { element.floor === 0 ? "begane grond" : element.floor+"e verdieping"}</span>
              </div>
            </div>
          ))}
          <div className=''>
            <h3 className='text-2xl text-emerald-900 font-medium'>Gegevens</h3>
            <form onSubmit={handleSubmit} className='my-2 text-emerald-900'>
              <input type="hidden" name="room_id" value={roomId}></input>
              <label htmlFor="fname">Voornaam</label>
              <input className='w-full border border-slate-300 rounded-md p-2 mb-2' type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
              <label htmlFor="lname">Achternaam</label>
              <input className='w-full border border-slate-300 rounded-md p-2 mb-2' type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
              <label htmlFor="fname">Studentennummer</label>
              <input className='w-full border border-slate-300 rounded-md p-2 mb-2' type="text" name="student_number" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)}></input>
              <label htmlFor="lname">Aantal plekken</label>
              <input className='w-full border border-slate-300 rounded-md p-2 mb-2' type="number" name="seats" min="1" max="8" value={seats} onChange={(e) => setSeats(e.target.value)}></input>
              <label htmlFor="lname">Datum</label>
              <input className='w-full border border-slate-300 rounded-md p-2 mb-2' type="datetime-local" name="date_time" value={date} onChange={(e) => setDate(e.target.value)}></input>
              <input className='my-2 w-full rounded-md p-4 drop-shadow-md text-xl text-white text-center bg-green-800 cursor-pointer' type="submit" value="Reserveren"></input>
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reserve;
