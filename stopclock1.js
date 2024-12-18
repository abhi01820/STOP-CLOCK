let ms=0,s=0,m=0,h=0;
let timer=null;

const display=document.querySelector(".time-display");
const laps=document.querySelector(".laps");
display.innerHTML="00 : 00 : 00 : 00";

function start(){
    if (!timer){
        timer=setInterval(run,10);
    }
}
function run(){
    ms++;
    if (ms==100){
        ms=0;
        s++;
    }
    if (s==60){
        s=0;
        m++;
    }
    if (m==60){
        m=0;
        h++;
    }
    display.innerHTML=getTimer();
}
function pause(){
    clearInterval(timer);
    timer=null;
}
function reset(){
    pause();
    ms=0;s=0;m=0;h=0;
    display.innerHTML="00 : 00 : 00 : 00";
}
function restart(){
    reset();
    start();
}

function lap(){
    const laptime=document.createElement("li");
    laptime.innerHTML=getTimer();
    laps.appendChild(laptime);
}
function resetLap(){
    laps.innerHTML="";
}


function getTimer() {
    return (
        (h < 10 ? "0" + h : h) + " : " +
        (m < 10 ? "0" + m : m) + " : " +
        (s < 10 ? "0" + s : s) + " : " +
        (ms < 10 ? "0" + ms : ms)
    );
}
