import React, {useState} from "react";
import BoilingWater from './BoilingWater'
interface ITemperature {
    temperature: number
}

export  default function TempInput({scale}: {scale: string}) {

    let [myInput, setMyinput] = useState<ITemperature>({
        temperature: 0.01
    })

    return(
        <div>
            <fieldset>
                <legend>Enter temperature in {scale}:</legend>
                <input
                    type="number"
                    step='0.01'
                    value={myInput.temperature}
                    onChange={((e) => {
                        setMyinput({ temperature: parseFloat(e.target.value) })
                    })} />
                <BoilingWater
                    celsius={myInput.temperature} />
            </fieldset>
        </div>
    )
}