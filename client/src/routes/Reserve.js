import classroom1 from '../img/classroom1.jpeg';
import { Link, useParams } from "react-router-dom";

function Reserve() {
  const params = useParams();
  console.log(params);
  
  return (
    <div className="Reserve">
      <header className="Reserve-header bg-white flex items-center justify-center drop-shadow-md">
        <Link to="/"><h1 className='text-5xl text-emerald-900 font-normal leading-normal mt-0 mb-2 text-center'>Reserveer App</h1></Link>
      </header>
      <section className='w-full h-full py-8 bg-stone-300'>
        <div className='rounded-xl w-1/2 mx-auto p-8 drop-shadow-lg bg-white'>
          <h2 className='text-4xl font-medium text-emerald-900 leading-normal mt-0'>Reserveren</h2>
          <div className='rounded-xl bg-white border border-slate-300 flex flex-row my-2 text-emerald-900 items-center w-full'>
            <div>
              <img alt="Classroom" className='object-cover rounded-l-xl w-32' src={classroom1}></img>
            </div>
            <div className='ml-8'>
              <h3 className='text-2xl'>Lokaal 2.11</h3>
              <span>Wijnhaven, 2e verdieping</span>
            </div>
          </div>
          <div className=''>
            <h3 className='text-2xl text-emerald-900 font-medium'>Gegevens</h3>
            <form className='my-2 text-emerald-900'>
              <label for="fname">Voornaam</label>
              <input className='w-full border rounded-md p-2 mb-2' type="text" id="fname" name="fname"></input>
              <label for="lname">Achternaam</label>
              <input className='w-full border rounded-md p-2 mb-2' type="text" id="lname" name="lname"></input>
              <label for="fname">Studentennummer</label>
              <input className='w-full border rounded-md p-2 mb-2' type="text" id="studentnumber" name="studentnumber"></input>
              <label for="lname">Aantal plekken</label>
              <input className='w-full border rounded-md p-2 mb-2' type="number" min="1" max="8" id="seats" name="seats"></input>
              <label for="lname">Datum</label>
              <input className='w-full border rounded-md p-2 mb-2' type="datetime-local" id="date" name="date"></input>
              <input className='my-2 w-full rounded-md p-4 drop-shadow-md text-xl text-white text-center bg-green-800 cursor-pointer' type="submit" value="Reserveren"></input>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reserve;
