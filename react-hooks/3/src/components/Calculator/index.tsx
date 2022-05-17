import React, { useState } from "react";
import ITemperature from "../../types/temperatura";
import BoilingWater from "./BoilingWater";
import TempCelsius from "./TempCelsius";
import TempFahr from "./TempFahr";



export default function Calculator(){
  
  let [celsiusTemp, setCelsiusTemp] = useState<ITemperature>({
    temperature: 0
  })
  let [fahrTemp, setFahrTemp] = useState<ITemperature>({
    temperature: 0
  })


    return(
      <div className="Inputs">
        <TempCelsius 
        setCelsiusTemp={setCelsiusTemp}
        celsiusTemp={celsiusTemp}
        setFahrTemp={setFahrTemp}
        scale={'Celsius'}
        />
        <TempFahr
        setCelsiusTemp={setCelsiusTemp}
        fahrTemp={fahrTemp}
        setFahrTemp={setFahrTemp}
        scale={'Fahreinheit'}
         />
      </div>
    )
}