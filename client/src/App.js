import React from "react";
import "./App.css";
import classroom1 from './img/classroom1.jpeg';
import classroom2 from './img/classroom2.jpeg';
import classroom3 from './img/classroom3.jpeg';
import classroom4 from './img/classroom4.jpeg';
import { Link } from "react-router-dom";
import 'tw-elements';
import Item from './Item';

function App() {
  // const [data, setData] = React.useState(null);

  React.useEffect(() => {
    document.title = `Reserveer App | CleanAir`;
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header bg-white flex items-center justify-center drop-shadow-md">
        <Link to="/"><h1 className='text-5xl text-emerald-900 font-normal leading-normal mt-0 mb-2 text-center'>Reserveer App</h1></Link>
      </header>
      <section className='h-full w-full bg-stone-300 m-auto py-8'>
        {/* Grid */}
        <div className='mx-4 md:mx-16 xl:mx-32 grid gap-8 accordion accordion-flush' id='accordionList'>
          <Item classroom='2.11' index='One' location='Wijnhaven' img={classroom1} seats='20' score='8,6' temp='21' co2='468' humidity='55' particles='25'></Item>
          {/* <Item classroom='2.34' index='2' location='Dijkzigt' img={classroom2} seats='8' score='7,3' temp='19' co2='486' humidity='30' particles='69'></Item>
          <Item classroom='1.25' index='3' location='Wijnhaven' img={classroom3} seats='36' score='6,4' temp='20' co2='600' humidity='23' particles='80'></Item>
          <Item classroom='6.34' index='4' location='Kralingse Zoom' img={classroom4} seats='10' score='9,1' temp='21' co2='200' humidity='26' particles='10'></Item> */}
        </div>
      </section>
    </div>
  );
}

export default App;
