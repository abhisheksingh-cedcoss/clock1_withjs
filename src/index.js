window.onload = initClock();

console.log("hello")

function initClock(){
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    if(min<10) min ='0'+ min;
    if(sec<10) sec = '0'+sec;

    
    document.getElementById("Clock_display").innerHTML=
        "Time is "+ hr + ":"+ min + ":" + sec;
    setTimeout('initClock()', 500);
}