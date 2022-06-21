import React from 'react';

function DataItem(props) {
    let value;
    let percentage;
    function calcPercentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    switch(props.type) {
        case "Co2":
            percentage = Math.ceil(calcPercentage(Number(props.value), 1200));
            value = props.value + " PPM";
            break;
        case "Temp":
            percentage = Math.ceil(calcPercentage(Number(props.value), 35));
            value = props.value + " °C";
            break;
        case "Vocht":
            percentage = Math.ceil(calcPercentage(Number(props.value), 100));
            value = props.value + " %";
        break;
        case "Stof":
            percentage = Math.ceil(calcPercentage(Number(props.value), 55));
            value = props.value + " µg/m3";
        break;
        case "Geluid":
            percentage = Math.ceil(calcPercentage(Number(props.value), 85));
            value = props.value + " DB";
        break;
        case "test":
            // code block
            break;
        default:
            percentage = 0;
            value = "Geen data";
    }
    const style = {
        width: percentage+"%",
    };
    return (
        <div className='DataItem border border-slate-300 text-center rounded-lg overflow-hidden'>
            <div className='py-4'>
                <span className='block text-5xl'>{props.type}</span>
                <span className='block text-2xl'>{value}</span>
            </div>
            <div className="w-full bg-gray-200 h-4 border-t ">
                <div className="bg-emerald-600 h-4" style={style}></div>
            </div>   
        </div>
    );
}

export default DataItem;
