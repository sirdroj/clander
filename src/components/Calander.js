import React, { useState } from 'react'
import "./Calander.css"
function Calander({date}) {
    const [mydate,setmydate]=useState(date);
    const currentYear = mydate.getFullYear();
    const currentMonth = mydate.getMonth();
    const numberofdays=new Date(currentYear, currentMonth, 0).getDate()
    const day1=new Date(currentYear,currentMonth,1)
    const day1OfWeek = day1.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonthName = months[mydate.getMonth()];
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    var arr=[];
    const years=[];
    for(let i=1995;i<2030;i++){
        years.push(i);
    }
    for (let i=0;i<day1OfWeek;i++){
arr.push(
    {
        day:daysOfWeek[i],
        num:"-"
    }
)
    }
for(let i=0;i<numberofdays;i++){
    arr.push({
        day:daysOfWeek[(i+day1OfWeek)%7],
        num:(i+1).toString()
    })
}

function handlechange(e){
setmydate( new Date(mydate.getFullYear(), e.target.value, mydate.getDay()))
console.log(currentDate.getMonth())
console.log(mydate.getMonth())
}
function handlechange2(e){
setmydate( new Date(e.target.value, mydate.getMonth(), mydate.getDay()))
}

  return (
    <div>
        <h1 className='heading'>Calander</h1>
        <h2 className='monthyear'>{currentMonthName} {mydate.getFullYear()}</h2>
        <label htmlFor="months"> chose month</label>
        <select name="months" onChange={handlechange}>
            {months.map(function(mo){
                return(
                    <option value={months.indexOf(mo)}>{mo}</option>
                )
            })}
        </select>
        <select name="years" onChange={handlechange2}>
            {years.map(function(year){
                return(
                    <option value={year}>{year}</option>
                )
            })}
        </select>
       
        <ul>
            {/* <p>mydate-{mydate.getMonth()} currentdate-{currentDate.getMonth()}</p> */}
        {arr.map(function(arr){
            
            if(arr.num.toString()===dayOfMonth.toString() && mydate.getMonth()===currentDate.getMonth() && mydate.getFullYear()===currentDate.getFullYear()){
                console.log("here");
                return(
                    <li style={{ borderColor: 'red' }}>
                    <h3>{arr.day}</h3>
                    <h2>{arr.num}</h2>
                </li>
                )
            }
            return(
                <li >
                    <h3>{arr.day}</h3>
                    <h2>{arr.num}</h2>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Calander