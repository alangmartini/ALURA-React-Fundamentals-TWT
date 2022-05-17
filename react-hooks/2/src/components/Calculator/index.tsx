import React, { useState } from "react";
import BoilingWater from "./TempInput/BoilingWater";
import TempInput from "./TempInput";



export default function Calculator(){
    
    return(
        <div className="Inputs">
            <TempInput scale= 'Celsius'/>
            <TempInput scale= 'Fahrenheit'/>
        </div>
    )
}