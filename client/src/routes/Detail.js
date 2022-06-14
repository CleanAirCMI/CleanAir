import classroom1 from '../img/classroom1.jpeg';
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

function Detail() {
  const params = useParams();
  console.log(params);
  
  return (
    <div className="Detail">
      <header className="Detail-header bg-white flex items-center justify-center drop-shadow-md">
        <h1 className='text-5xl text-emerald-900 font-normal leading-normal mt-0 mb-2 text-center'>Reserveer App</h1>
      </header>
      <section className='w-full h-full py-8 bg-stone-300'>
        <div className='rounded-xl mx-4 md:mx-16 xl:mx-32 drop-shadow-lg'>
          <div className='rounded-xl h-96 w-full bg-center' style={{ backgroundImage:`url(${classroom1})` }}></div>
          <div className='rounded-xl bg-white -mt-4 p-8'>
            <div className='flex flex-row items-center text-lg text-emerald-900'>
              <FaAngleLeft></FaAngleLeft><Link to="/">Terug</Link>
            </div>
            <h1 className='text-4xl font-medium text-emerald-900 leading-normal mt-0'>Lokaal 2.11</h1>
            <div className='grid md:grid-cols-2'>
              <div>
                <span className='block text-2xl text-emerald-600'> 20 plekken beschikbaar</span>
                <span className='block text-2xl'>Klimaatcijfer: <span className='text-emerald-600'>8,6</span></span>
              </div>
              <div>
              <div className='mb-4 md:mb-0'>
                <div>
                  <span className='font-bold text-emerald-900'>Temp: </span><span>21 °C</span>
                </div>
                <div>
                  <span className='font-bold text-emerald-900'>CO2: </span><span>468 PPM</span>
                </div>
                <div>
                  <span className='font-bold text-emerald-900'>Luchtvochtigheid: </span><span>55 %</span>
                </div>
                <div>
                  <span className='font-bold text-emerald-900'>Fijnstof: </span><span>25 µg/m3</span>
                </div>
                </div>
              </div>
            </div>
            <div className='py-8'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit tellus at nisl placerat varius. 
              Phasellus dictum dui eget est congue, et sagittis orci aliquam. Class aptent taciti sociosqu ad litora torquent 
              per conubia nostra, per inceptos himenaeos. Cras semper leo purus, vitae laoreet est faucibus a. Aliquam in 
              nunc luctus, ultricies nunc sit amet, mattis quam. Etiam at enim vel nisl imperdiet bibendum. Aenean mollis mi 
              quis feugiat eleifend. Praesent fringilla, mauris eu ultrices rutrum, leo tortor egestas ligula, ac luctus sem 
              sapien id massa. Aenean ut nisi pellentesque turpis ultricies elementum eget et nunc.</p>
            </div>
            <div>
              <a className='block w-1/3 rounded-md p-4 drop-shadow-md text-xl text-white text-center bg-green-800' href='#'>Reserveren</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
