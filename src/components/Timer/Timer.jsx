import { useRef, useState } from "react";
const fixTime = (time) => (time<10 ? `0` +time :time);
const formatTimeToString = (time)=>{
    const seconds = time%60;
    const min = Math.floor(time/60)%60;
    return `00:${fixTime(min)}:${fixTime(seconds)}`;
}
function Timer(){
    const [time,setTime] = useState(0);

    const ref  = useRef(null);

    const StartTimer = ()=>{
        if(ref.current !== null) return;
        ref.current = setInterval(()=>{
            setTime((time)=>time+1);
        },1000);

    }
    const stopTimer =()=>{
        clearInterval(ref.current);
        ref.current = null;
    }
    const resetTimer = ()=>{
        stopTimer();
        setTime(0);
    }
    return(
        <div>
            <h1>Timer</h1>
            <h1>{formatTimeToString(time)}</h1>
            <button onClick={StartTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer;