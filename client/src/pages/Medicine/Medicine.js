import { useEffect } from "react";
function Medicine(){
    useEffect(()=>{
        document.title="Medicine Management"
    })
    return(
        <div>
            <h1>THIS IS MEDICINE PAGE</h1>
        </div>
    )
}
export default Medicine;