import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import 'tw-elements';
import Item from './Item';
import uri from ".";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    document.title = `Reserveer App | CleanAir`;
  }, []);

  const fetchData = () => {
    fetch(uri+"/classrooms/get")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log('error'));
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="App">
      <header className="App-header bg-white flex flex-row items-center px-4 md:px-8 justify-between drop-shadow-md">
        <Link to="/"><h1 className='text-4xl md:text-5xl text-emerald-900 font-normal leading-normal py-4 mt-0 mb-2 text-center'>Werkplekkie</h1></Link>
        <span className="text-emerald-900 text-lg md:text-xl">Ingelogd als Ali (0949886)</span>
      </header>
      <section className='h-full w-full bg-stone-300 m-auto py-8'>
        <div className='mx-4 md:mx-16 xl:mx-32 grid gap-8 accordion' id='accordionList'>
          {data && data.map((element, index)=> (
            <Item key={index} classroom_id={element.room_id} classroom={element.name} index={index+1} location={element.location_name} description={element.description} img={process.env.PUBLIC_URL+'/img/'+element.image} seats={element.total_seats} score={element.climate_score} temp={element.temperature} co2={element.co2} humidity={element.humidity} particles={element.particles}></Item>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
