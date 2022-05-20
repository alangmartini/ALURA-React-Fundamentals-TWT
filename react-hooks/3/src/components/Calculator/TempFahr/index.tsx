import React, {useState} from "react";
import BoilingWater from '../BoilingWater'
import ITemperature from '../../../types/temperatura'



export default function TempFahr({ setFahrTemp, setCelsiusTemp, scale,  fahrTemp}: 
    { setCelsiusTemp: React.Dispatch<React.SetStateAction<
    ITemperature>>, 
    setFahrTemp: React.Dispatch<React.SetStateAction<
        ITemperature>>,
    scale:string,
    fahrTemp: ITemperature,
    }
    ) {



    function fahrToCelsius(fahrenheit: number) {
        return (fahrenheit - 32) * (5 / 9);
    }

    return(
        <div>
            <fieldset>
                <legend>Enter temperature in {scale}:</legend>
                <input
                    type="number"
                    step='0.01'
                    value={fahrTemp.temperature}
                    onChange={((e) => { // this doesnt work cuz setFahrTEmpo is setting a new state
                        // while setCelsiuTemp is getting an already existing temp, and not the new one.
                        //setFahrTemp({ temperature: parseFloat(e.target.value) })
                        //setCelsiusTemp({ temperature: fahrToCelsius(parseFloat(e.target.value))})

                    })
                    } />
                <BoilingWater
                    celsius={fahrToCelsius(fahrTemp.temperature)} />
            </fieldset>
        </div>
    )
}