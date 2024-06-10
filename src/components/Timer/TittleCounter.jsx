import { useEffect, useState } from "react"

function TittleCounter (){
    const [count,setCount] =useState(0);

    useEffect(()=>{
        document.title = `Clicked ${count} Times`;
    })
    return(
        <div>
            <h2>{`Clicked ${count} Times`}</h2>
            <button onClick={()=>setCount(count+1)}>Click here!</button>
        </div>
    )
}

export default TittleCounter;