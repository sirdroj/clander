import React from 'react'
import "./Calander.css"
function Calander({date}) {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const numberofdays=new Date(currentYear, currentMonth, 0).getDate()
    const day1=new Date(currentYear,currentMonth,1)
    const day1OfWeek = day1.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonthName = months[date.getMonth()];
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    var arr=[];
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
  return (
    <div>
        <h1 className='heading'>Calander</h1>
        <h2 className='monthyear'>{currentMonthName} {currentYear}</h2>
        <ul>

        {arr.map(function(arr){
            if(arr.num.toString()===dayOfMonth.toString()){
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