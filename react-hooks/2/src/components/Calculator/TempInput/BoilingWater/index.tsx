import React from "react";




export default function BoilingWater({celsius}: {celsius: number}) {
    if (celsius >= 100) {
        console.log('this is a render')
        return <p>'The water will boil'</p>
    }
    else {
        return <p>'The water wont boil'</p>
    }

}
