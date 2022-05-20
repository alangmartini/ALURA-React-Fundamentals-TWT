import React, {useState} from "react";
import IInfos from "../../types/Infos";
import {v4 as uuidv4} from 'uuid';
export default function Formulario({setNames}: {
    setNames: React.Dispatch<React.SetStateAction<IInfos[]>>
}){

    let [inputContent, setInputContent] = useState(
        {
        Model: '',
        Licenseplate: '',
        Entrada: '',
        }
)

    return(
        <form 
        onSubmit={(e) => {
            e.preventDefault()
            setNames( (prevValue: IInfos[]) => 
            [
                ...prevValue, 
                {
                ...inputContent, //a spread is necessary because inputContent is a Object, and we are inserting new itens inside de object
                Selecionado: false,
                Completado: false,
                Id: uuidv4() //we are inserting a ID  so we can know which LI is being selected
                }
            
            ])

            // on submit, after we updated our props, we return the value to empty
            setInputContent({
                Model: '',
                Licenseplate: '',
                Entrada: '',
            })
            
        }}>
            
            <input 
            placeholder="Insert your Model"
            value={inputContent.Model}
            onChange={(e) => {
                //both inputs communicate with this State. The idea is to give the input to state, and make the Form take it later
                setInputContent({ ...inputContent, Model: e.target.value})
            }}/>
            <br />
            <input 
            placeholder="Insert your license plate"
            value={inputContent.Licenseplate}
            onChange={(e) => {
                ;
                setInputContent({...inputContent, Licenseplate: e.target.value});
                
            }}
            />
            <br />
            <button type='submit'
                onClick={() =>{
                    setInputContent({ ...inputContent, 
                        Entrada: 
                        new Date().getDate().toString() + '/' +
                        new Date().getMonth().toString() + '/' +
                        new Date().getFullYear().toString() + ' - ' +
                        new Date().getHours().toString() + ' : ' +
                        new Date().getMinutes().toString() + ' : ' +
                        new Date().getSeconds().toString() 
       
                     })
                }}
            >Adicionar</button>
        </form>
    )
}