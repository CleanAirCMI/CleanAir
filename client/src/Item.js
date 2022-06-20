import React from 'react';
import 'tw-elements';
import { Link } from "react-router-dom";
import DataItem from './components/DataItem';
import { FaAngleDown } from "react-icons/fa";

function Item(props) {
  return (
  <div className='Item bg-white drop-shadow-lg rounded-xl overflow-hidden'>
    <div className='w-full p-4 grid md:grid-cols-2'>
      <div className='text-4xl font-medium text-emerald-900'>
        <h3>Lokaal {props.classroom}</h3>
      </div>
      <div className='text-4xl font-medium text-emerald-900'>
        <span className='block md:text-center'>{props.location}</span>
      </div>
    </div>
    <div className="accordion-item">
      <h4 className="accordion-header cursor-pointer mb-0" id={'heading'+props.index}>
        <button className="flex items-center transition cursor-pointer" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse'+props.index} aria-expanded="false" aria-controls={'collapse'+props.index}>
          <div className='grid md:grid-cols-2'>
            <div className='w-full'>
              <img alt="Classroom" className='object-cover h-full' src={props.img}></img>
            </div>
            <div className='p-4 md:py-4 md:pr-4'>
              <div className='h-full flex flex-col justify-between'>
                <div className='w-full h-full flex flex-col justify-center'>
                  <h3 className='text-7xl font-medium text-emerald-600 leading-normal mt-0'>{props.score}</h3>
                  <span className='block text-2xl text-emerald-600'>{props.seats} plekken beschikbaar</span>
                </div>
                <div className='w-full flex justify-center mb-0'>
                  <FaAngleDown className='h-16 text-emerald-900'></FaAngleDown>
                </div>
              </div>
            </div>
          </div>
        </button>
      </h4>
      <div id={'collapse'+props.index} className="accordion-collapse collapse w-full" aria-labelledby={'heading'+props.index}
        data-bs-parent="#accordionList">
        <div className="accordion-body text-xl py-8 px-5">
          <p className='italic w-2/3 mx-auto text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus sapien, sagittis at lectus quis, 
          bibendum venenatis lorem. Vestibulum arcu libero, placerat ac sapien sed, tempor posuere mi. Donec 
          accumsan magna dapibus lorem placerat, auctor auctor augue luctus.</p>
          <div className='grid md:grid-cols-5 p-8 gap-8 text-emerald-900'>
            <DataItem type="Co2" value={props.co2+" PPM"} percentage="45"></DataItem>
            <DataItem type="Temp" value={props.temp+" °C"} percentage="60"></DataItem>
            <DataItem type="Vocht" value={props.humidity+" &"} percentage="55"></DataItem>
            <DataItem type="Stof" value={props.particles+" µg/m3"} percentage="20"></DataItem>
            <DataItem type="CO" value="10 PPM" percentage="5"></DataItem>     
          </div>
          <div className='w-1/2 mx-auto'>
            <Link className='block w-full rounded-md p-4 drop-shadow-md text-xl text-white text-center bg-green-800' to="/reserve/123">Reserveren</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Item;
