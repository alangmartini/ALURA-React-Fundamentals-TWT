import React from "react";
import IInfos from "../../types";
import Item from "./Item";

export default function Lista({names}: {names: IInfos[]}){
    return(
        <div className="ListWrapper">
            <ul>
                {names.map((item, index) => (
                    <Item
                    index={index}
                    {...item}
                    />
                ))}
            </ul>
        </div>

    )
}