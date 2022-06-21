import React from 'react';

function DataItem(props) {
    const style = {
        width: props.percentage+"%",
    };
    return (
        <div className='DataItem border border-slate-300 text-center rounded-lg overflow-hidden'>
            <div className='py-4'>
                <span className='block text-5xl'>{props.type}</span>
                <span className='block text-2xl'>{props.value}</span>
            </div>          
            <div className="w-full bg-gray-200 h-4 border-t ">
                <div className="bg-emerald-600 h-4" style={style}></div>
            </div>   
        </div>
    );
}

export default DataItem;
