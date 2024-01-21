import { useState } from "react";
import CountryContext from "./cntryContext";


const CountryState = (props)=>{
    const cntry = {
        "country":"in"
    }

    const [state,setState]=useState(cntry);

    return(
        <CountryContext.Provider value={{state,setState}}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryState;