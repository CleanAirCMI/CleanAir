import React from 'react';

function DataItem(props) {
    let value;
    let percentage;
    let backgroundColor = "bg-emerald-600";
    let textColor = "text-emerald-600";
    function calcPercentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }

    switch(props.type) {
        case "Co2":
            percentage = Math.ceil(calcPercentage(Number(props.value), 1000));
            value = props.value + " PPM";
            if(percentage > 60){
                backgroundColor="bg-amber-500";
                textColor="text-amber-500";
            }
            if(percentage > 70 && percentage < 85){
                backgroundColor="bg-orange-500";
                textColor="text-orange-500";
            }
            if(percentage > 85){
                backgroundColor="bg-red-700";
                textColor="text-red-700";
            }
            break;
        case "Temp":
            percentage = Math.ceil(calcPercentage(Number(props.value), 34));
            value = props.value + "°C";
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
            value = props.value + "%";
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
            if(percentage > 20){
                backgroundColor="bg-amber-500";
                textColor="text-amber-500";
            }
            if(percentage > 35 && percentage < 50){
                backgroundColor="bg-orange-500";
                textColor="text-orange-500";
            }
            if(percentage > 50){
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
        "--value": percentage,
        "--size": "8rem",
        
    };
    return (
        <div className='DataItem text-center rounded-xl overflow-hidden'>
            <div className={textColor+' py-4'}>
                <div className='radial-progress bg-gray-100 drop-shadow-md' style={style}>
                    <span className={textColor+' block font-medium text-xl lg:text-1xl'}>{value}</span>
                    <span className='block text-black text-md lg:text-xl'>{props.type}</span>
                </div>
            </div>  
        </div>
    );
}

export default DataItem;
