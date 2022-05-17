import React, {useState} from "react";

export default function Input(props: any){

    return(
        <input

        onChange={(e) => {
            
            let a = props.setState(e.target.value)
        }}
        />
    )
}


