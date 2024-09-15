
setInterval(loop,1000);
function loop(){
    let now = new Date();
    let hours = now.getHours();
    let mintues = now.getMinutes();
    let seconds = now.getSeconds();
    let am_or_pm = "am";
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let months = ["Janaury","Feburary","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("day").innerHTML = days[day];
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = months[month];
    document.getElementById("year").innerHTML = year;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mintues").innerHTML = mintues;
    document.getElementById("seconds").innerHTML = seconds;
    if(hours>12){
        hours = hours-12;
       }
    if(date<10){
    document.getElementById("date").innerHTML = "0"+date;
    }
    else{
        document.getElementById("date").innerHTML = date;
    }
    if(hours<10){
     document.getElementById("hours").innerHTML = "0"+hours;
    }
    else{
        document.getElementById("hours").innerHTML = hours;
    }
    if(mintues<10){
        document.getElementById("mintues").innerHTML = "0"+mintues;
       }
       else{
           document.getElementById("mintues").innerHTML = mintues;
       }
       if(seconds<10){
        document.getElementById("seconds").innerHTML = "0"+seconds;
       }
       else{
           document.getElementById("seconds").innerHTML = seconds;
       }
       if(hours>=12){
        document.getElementById("am_or_pm").innerHTML = "pm";
       }
}