import { useEffect } from "react";
function Staff(){
    useEffect(()=>{
        document.title="Staff Management"
    })
    return(
        <div>
            <h1>THIS IS STAFF PAGE</h1>
        </div>
    )
}
export default Staff;