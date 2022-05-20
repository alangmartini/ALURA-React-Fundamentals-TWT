import React from "react";
import IInfos from "../../../types/Infos";
import style from './style.module.scss'

interface Props extends IInfos {
    selecionaTarefa: (infoSelecionado: IInfos) => void,
    names: IInfos[]
    setNames: React.Dispatch<React.SetStateAction<IInfos[]>>
}

export default function Item(
    {Model, Licenseplate, Entrada, Selecionado, Id, Completado, selecionaTarefa, names, setNames} : Props
   ,
    ){

        function del(namesObject: IInfos){
            return Id !== namesObject.Id
        }


    return(
    <li className={`${style.ItemWrapper} ${Selecionado === true ? style.itemSelecionado : ''}`} 
    onClick={ (): void => {
        selecionaTarefa({
            Model,
            Licenseplate,
            Entrada,
            Selecionado,
            Id,
            Completado
        });
    }}>
        {Model + ' | '}
        { Licenseplate + ' | '}<br />
        {Entrada}
        <button //delete button
        //onClick={() => names = names - this.object.}
        onClick={() => {
            setNames(names.filter(del))
        }}  
        >X</button>
    </li>
    )
}