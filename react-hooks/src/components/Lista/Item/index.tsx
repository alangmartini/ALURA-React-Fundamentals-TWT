import React from "react";
import IInfos from "../../../types";


export default function Item(
    {Model, Licenseplate, Entrada,  index} : 
    {Model: string, Licenseplate: string, Entrada: string, index: number}){
    return(
    <li key={index}>
        {Model + ' | '}
        { Licenseplate + ' | '}
        {Entrada}
    </li>
    )


}