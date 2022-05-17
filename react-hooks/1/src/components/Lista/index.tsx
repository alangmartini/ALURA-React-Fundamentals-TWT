import React from "react";
import IInfos from "../../types/Infos";
import Item from "./Item";
import styles from './style.module.scss'

interface Props{
    names: IInfos[],
    selecionaTarefa: (infoSelecionado: IInfos) => void
}
export default function Lista({names, selecionaTarefa}: Props,
    
    ){
    return(
        <div className={styles.listWrapper}>
            <ul>
                
                {names.map((item) => {
                console.log(names)
                return(     
                    <Item
                    
                    selecionaTarefa={selecionaTarefa}
                    key={item.Id}
                    {...item}
                    
                    />
                    )
                })}
            </ul>
        </div>

    )
}