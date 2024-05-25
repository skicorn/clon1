import React, { useEffect } from 'react';

function Setting(){
    useEffect(()=>{
        document.title="Setting"
    })
    return(
        <div>
            <h1>HEELO WORD</h1>
        </div>
    )
}
export default Setting;