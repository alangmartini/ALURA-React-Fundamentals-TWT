import React from "react";
import IInfos from "../../../types/Infos";
import style from './style.module.scss'

interface Props extends IInfos {
    selecionaTarefa: (infoSelecionado: IInfos) => void
}

export default function Item(
    {Model, Licenseplate, Entrada, Selecionado, Id, Completado, selecionaTarefa} : Props
   ,
    ){
    return(
    <li className={`${style.ItemWrapper} ${Selecionado === true ? style.itemSelecionado : ''}`} 
    onClick={ () => {
        
        // on click, updates the selecionado with the actual object (IInfos) and change Selecionado to true
        selecionaTarefa({
            Model,
            Licenseplate,
            Entrada,
            Selecionado,
            Id,
            Completado

        })

        if(Selecionado === true){
            Selecionado = false;
        }
        
    
    }}>
        {Model + ' | '}
        { Licenseplate + ' | '}<br />
        {Entrada}
    </li>
    )


}