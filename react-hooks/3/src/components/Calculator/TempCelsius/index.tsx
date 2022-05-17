import React, {useState} from "react";
import BoilingWater from '../BoilingWater'

interface ITemperature {
    temperature: number
}

export default function TempCelsius(
    {setCelsiusTemp, setFahrTemp, scale, celsiusTemp}:
    {
    setCelsiusTemp: React.Dispatch<React.SetStateAction<
    ITemperature>>,
    setFahrTemp: React.Dispatch<React.SetStateAction<
        ITemperature>>
    scale: string,
    celsiusTemp: ITemperature,
}
) {

    let [myInput, setMyinput] = useState<ITemperature>({
        temperature: 0.01
    })


    function fahrToCelsius(fahrenheit: number) {
        return (fahrenheit + 32) * (9 / 5);
    }
    return(
        <div>
            <fieldset>
                <legend>Enter temperature in {scale}:</legend>
                <input
                    type="number"
                    step='0.01'
                    value={celsiusTemp.temperature}
                    onChange={((e) => {
                        setCelsiusTemp({ temperature: parseFloat(e.target.value)})
                        setFahrTemp({ temperature: fahrToCelsius(parseFloat(e.target.value))})

                    })} />
                <BoilingWater
                    celsius={celsiusTemp.temperature} />
            </fieldset>
        </div>
    )
}