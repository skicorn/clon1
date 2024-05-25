import { useEffect } from "react";

function Customer(){
    useEffect(()=>{
        document.title="Customer Management"
    })
    return(
        <div>
            <h1>THIS IS CUSTOMER PAGE</h1>
        </div>
    )
}
export default Customer;