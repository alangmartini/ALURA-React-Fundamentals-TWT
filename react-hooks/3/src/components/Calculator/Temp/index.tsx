import React from "react";
import ITemperature from "../../../types/temperatura";

export default function Temp({temp, scale, setTemp}: {
    temp: ITemperature, 
    scale: string,
    setTemp: React.Dispatch<React.SetStateAction<ITemperature>>
    }
) {

    function toFahr(tempInCelsius: number){ // actual temperature is a props that comes from Calculator temp state
        return (tempInCelsius + 32) * (9 / 5);
    }

    function toCelsius(tempInFahr: number){
        return (tempInFahr - 32) * (5 / 9);
    }


    // two functions. In the #1, if the scale of the input is C, 
    // when the type stored in Calculator STATE is also C it returns
    // its plain value. Else, return the result of toFahr (which translate f to c)
    // the #2 do the oposite

    function tempIsC(temp: ITemperature){ 
        if (temp.type === 'c'){
            return temp.temperature
        }
        else{
            return toFahr(temp.temperature)
        }
    }
    function tempIsF(temp: ITemperature){
        if(temp.type === 'f'){
            return temp.temperature
        }
        else{
            return toCelsius(temp.temperature)
        }

    }


    return(
        <div>
            <fieldset>
                <legend>Enter temperature in {scale}</legend>
                <input 
                type="text" 
                value={ 
                    scale === 'c' ? tempIsC(temp) : tempIsF(temp) }
                onChange={(e) => {
                    setTemp({
                        temperature: parseInt(e.target.value),
                        type: scale
                    })
                }}
                />
            </fieldset>
        </div>
    )
}