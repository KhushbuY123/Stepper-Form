import React, { useState } from "react";
import App from "../App";
export const multiStepContext=React.createContext();
export default function stepContext(){
    const[currentStep,setStep]=useState(1);
    const[userdata,setuserdata]=useState([]);
    const[finaldata,setfinaldata]=useState([])
    function submitdata(){
        setfinaldata(finaldata=>[...finaldata,userdata]);
        setuserdata("");
        setStep(1)
    }
    return(
        <>
        <multiStepContext.Provider value={{currentStep,setStep,userdata,setuserdata,finaldata,setfinaldata,submitdata}}>
            <App></App>
        </multiStepContext.Provider>
        </>
    )
}
