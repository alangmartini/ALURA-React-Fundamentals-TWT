import React, {useState} from "react";
import IInfos from "../../types/Infos";
import {v4 as uuidv4} from 'uuid';
export default function Formulario(props: any){

    let [inputContent, setInputContent] = useState(
        {
        Model: '',
        Licenseplate: '',
        Entrada: '',
        }
)

    return(
// if is written props, it will get the property from the parent component. simply as that.
        <form 
        onSubmit={(e) => {
            
            e.preventDefault()
            // this communicates with State in app.tsx. Thus prevValue (to get the previous objects of the Array) plus the object to insert from here.
            props.setNames( (prevValue: IInfos[]) => 
            [
                ...prevValue, 
                {
                ...inputContent, //a spread is necessary because inputContent is a Object, and we are inserting new itens inside de object
                Selecionado: false,
                Completado: false,
                Id: uuidv4() //we are insertind a ID  so we can know which LI is being selected
                }
            
            ])
                
            
            
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