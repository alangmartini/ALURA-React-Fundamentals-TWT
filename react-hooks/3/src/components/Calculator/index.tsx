import React, { useState } from "react";
import ITemperature from "../../types/temperatura";
import BoilingWater from "./BoilingWater";
import Temp from "./Temp";
import TempCelsius from "./TempCelsius";
import TempFahr from "./TempFahr";



export default function Calculator(){
  
  let [celsiusTemp, setCelsiusTemp] = useState<ITemperature>({
    temperature: 0
  })
  let [fahrTemp, setFahrTemp] = useState<ITemperature>({
    temperature: 0
  })

  let [temp, setTemp] = useState<ITemperature>({
    temperature: 0,
    type: 'c'
  })

    return(
      <div className="Inputs">
        <Temp
        scale = 'c'
        setTemp={setTemp}
        temp={temp}
        />
        <Temp
          scale='f'
          setTemp={setTemp}
          temp={temp}
        />
      </div>
    )
}