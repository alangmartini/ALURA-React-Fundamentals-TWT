import React from "react";
import IInfos from "../../types/Infos";
import Item from "./Item";
import styles from './style.module.scss'

interface Props{
    names: IInfos[],
    selecionaTarefa: (infoSelecionado: IInfos) => void
    setNames: React.Dispatch<React.SetStateAction<IInfos[]>>
}
export default function Lista(

    {names, selecionaTarefa, setNames}: Props

    ){
    return(
        <div className={styles.listWrapper}>
            <ul>
                {names.map( (item): JSX.Element => {
                    return (
                        <Item
                            names={names}
                            setNames={setNames}
                            selecionaTarefa={selecionaTarefa}
                            key={item.Id}
                            Model={item.Model}
                            Licenseplate={item.Licenseplate}
                            Entrada={item.Entrada}
                            Selecionado={item.Selecionado}
                            Id={item.Id}
                            Completado={item.Completado}
                            // instead of putting model to Completado, another options is sending a spread:
                            // {...item}, which means, for each item of object, send Item={Item}
                            //but i find it a bit poluted.
                            />
                            
                    );
                })}
            </ul>
        </div>

    )
}