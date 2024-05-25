import { useEffect } from "react";
function Order(){
    useEffect(()=>{
        document.title="Order Management"
    })
    return(
        <div>
            <h1>THIS IS ORDER PAGE</h1>
        </div>
    )
}
export default Order;   