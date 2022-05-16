import React, {useState} from "react";
import IInfos from "../../types";

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
            props.setNames( (prevValue: IInfos[]) => [...prevValue, inputContent ])
            
        }}>
            
            <input 
            placeholder="Insert your Model"
            onChange={(e) => {
                //both inputs communicate with this State. The idea is to give the input to state, and make the Form take it later
                setInputContent({ ...inputContent, Model: e.target.value})
            }}/>
            <br />
            <input 
            placeholder="Insert your license plate"
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