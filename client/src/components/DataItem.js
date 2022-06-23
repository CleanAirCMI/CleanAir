import React from 'react';

function DataItem(props) {
    let value;
    let percentage;
    let backgroundColor = "bg-emerald-600";
    let textColor = "text-emerald-900";
    function calcPercentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    switch(props.type) {
        case "Co2":
            percentage = Math.ceil(calcPercentage(Number(props.value), 1200));
            value = props.value + " PPM";
            if(percentage > 50){
                backgroundColor="bg-amber-500";
                textColor="text-amber-500";
            }
            if(percentage > 60 && percentage < 80){
                backgroundColor="bg-orange-500";
                textColor="text-orange-500";
            }
            if(percentage > 80){
                backgroundColor="bg-red-700";
                textColor="text-red-700";
            }
            break;
        case "Temp":
            percentage = Math.ceil(calcPercentage(Number(props.value), 35));
            value = props.value + " °C";
            if(percentage > 75){
                backgroundColor="bg-amber-500";
                textColor="text-amber-500";
            }
            if(percentage > 85 && percentage < 90){
                backgroundColor="bg-orange-500";
                textColor="text-orange-500";
            }
            if(percentage > 90){
                backgroundColor="bg-red-700";
                textColor="text-red-700";
            }
            break;
        case "Vocht":
            percentage = Math.ceil(calcPercentage(Number(props.value), 100));
            value = props.value + " %";
            if(percentage > 50){
                backgroundColor="bg-amber-500";
                textColor="text-amber-500";
            }
            if(percentage > 60 && percentage < 80){
                backgroundColor="bg-orange-500";
                textColor="text-orange-500";
            }
            if(percentage > 80){
                backgroundColor="bg-red-700";
                textColor="text-red-700";
            }
        break;
        case "Stof":
            percentage = Math.ceil(calcPercentage(Number(props.value), 55));
            value = props.value + " µg/m3";
            if(percentage > 50){
                backgroundColor="bg-amber-500";
                textColor="text-amber-500";
            }
            if(percentage > 60 && percentage < 80){
                backgroundColor="bg-orange-500";
                textColor="text-orange-500";
            }
            if(percentage > 80){
                backgroundColor="bg-red-700";
                textColor="text-red-700";
            }
        break;
        case "Geluid":
            percentage = Math.ceil(calcPercentage(Number(props.value), 85));
            value = Math.ceil(props.value) + " DB";
            if(percentage > 70){
                backgroundColor="bg-amber-500";
                textColor="text-amber-500";
            }
            if(percentage > 80 && percentage < 90){
                backgroundColor="bg-orange-500";
                textColor="text-orange-500";
            }
            if(percentage > 90){
                backgroundColor="bg-red-700";
                textColor="text-red-700";
            }
        break;
        default:
            percentage = 0;
            value = "Geen data";
    }
    const style = {
        width: percentage+"%",
    };
    return (
        <div className='DataItem border border-slate-300 text-center rounded-xl overflow-hidden'>
            <div className={textColor+' py-4'}>
                <span className='block lg:text-4xl'>{props.type}</span>
                <span className='block text-2xl'>{value}</span>
            </div>
            <div className="w-full bg-gray-200 h-4 border-t ">
                <div className={backgroundColor+' h-4'} style={style}></div>
            </div>   
        </div>
    );
}

export default DataItem;
