import React from 'react';
import 'tw-elements';
import { Link } from "react-router-dom";
import DataItem from './components/DataItem';
import { FaAngleDown } from "react-icons/fa";

function Item(props) {
  return (
  <div className='Item bg-white drop-shadow-lg rounded-xl lg:rounded-4xl overflow-hidden'>
    <div className="accordion-item">
      <h4 className="accordion-header cursor-pointer mb-0" id={'heading'+props.index}>
        <button className="flex items-center transition cursor-pointer" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse'+props.index} aria-expanded="false" aria-controls={'collapse'+props.index}>
          <div className='grid lg:grid-cols-3'>
            <div className='w-full lg:col-span-2'>
              <img alt="Classroom" className='object-cover' src={props.img}></img>
            </div>
            <div className='p-4 md:py-4 md:pr-4 w-full'>
              <div className='h-full flex flex-col justify-between mx-auto'>
                <h3 className='text-4xl mt-4 font-medium text-emerald-900'>{props.classroom}</h3>
                <div className='w-full h-full flex flex-col justify-center'>
                  <span className='block font-bold text-2xl text-emerald-900'>KLIMAAT SCORE</span>
                  <h3 className='text-7xl font-medium text-emerald-600 leading-normal mt-0'>{props.score}/10</h3>
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
        <div className="accordion-body text-xl py-8 lg:px-16">
          <div className='grid grid-cols-2 lg:grid-cols-5 p-8 gap-8 text-emerald-900'>
            <DataItem type="Co2" value={props.co2}></DataItem>
            <DataItem type="Temp" value={props.temp}></DataItem>
            <DataItem type="Vocht" value={props.humidity}></DataItem>
            <DataItem type="Stof" value={props.particles}></DataItem>
            <DataItem type="Geluid" value={props.sound}></DataItem>     
          </div>
          <p className='w-2/3 mx-auto text-2xl text-slate-600'>{props.description}</p>
          <div className='w-4/5 md:w-1/2 mt-8 mx-auto'>
            <Link className='block w-full rounded-lg p-4 drop-shadow-md text-2xl text-white text-center bg-black' to={"/classrooms/get/"+props.classroom_id}>RESERVEREN</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Item;
