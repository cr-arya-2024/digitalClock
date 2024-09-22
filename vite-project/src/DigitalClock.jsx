import React,{useState,useEffect} from "react";
 const DigitalClock =()=>{
const [time,setTime]=useState(new Date())
useEffect(()=>{
    let timer=setInterval(()=>{setTime(new Date())},1000)
    return ()=>{
        clearInterval(timer)
    }
},[])
function handle(){
  let  hour=time.getHours()
  let  min=time.getMinutes()
  let  sec=time.getSeconds()
    return `${hour} ${min} ${sec}`
}
return(
    <>
    <span>{handle()}</span>
    </>
)
 }
 export default DigitalClock