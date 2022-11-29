let homeEl = document.getElementById("home-el");
let homeScore =document.getElementById("home-score");
let pointsHome =0;

let guestEl = document.getElementById("guest-el");
let guestScore =document.getElementById("guest-score");
let pointsGuest =0;

let periodEl =document.getElementById("period-el");
let timeEl = document.getElementById("time-el");

let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");
let btnHome = document.getElementById("btn-home");
let btnGuest = document.getElementById("btn-guest");
let btnPeriodOne = document.getElementById("btn-period-one");
let btnPeriodTwo = document.getElementById("btn-period-two");

let seconds =0;
let interval =null;


function resetBtn(){
    btnStop.disabled=true;
    btnReset.disabled=true;
    btnHome.disabled=true;
    btnGuest.disabled=true;
    btnPeriodOne.disabled=true;
    btnPeriodTwo.disabled=true;
    btnStart.disabled=false;
}

resetBtn();

function winner(){
    if ( homeEl.textContent>guestEl.textContent ){
        homeScore.classList.remove("border-light-blue")
        homeScore.classList.add("border-hightlight")
        guestScore.classList.add("border-light-blue")
        guestScore.classList.remove("border-hightlight")
       
    }else if ( homeEl.textContent< guestEl.textContent ){
        guestScore.classList.remove("border-light-blue")
        guestScore.classList.add("border-hightlight")
        homeScore.classList.add("border-light-blue")
        homeScore.classList.remove("border-hightlight")
    }else {
        homeScore.classList.remove("border-light-blue")
        homeScore.classList.add("border-hightlight")
        guestScore.classList.remove("border-light-blue")
        guestScore.classList.add("border-hightlight")
    }
}


function addOneHome(){
    pointsHome+=1;
    homeEl.textContent =pointsHome;
    winner();
}


function addOneGuest(){
    pointsGuest+=1;
    guestEl.textContent =pointsGuest;
    winner();
}

function periodOne(){
    periodEl.textContent=1;
    periodEl.classList.add("light-blue");
    periodEl.classList.remove("gray");
}

function periodTwo(){
    periodEl.textContent=2;
    periodEl.classList.add("light-blue");
    periodEl.classList.remove("gray");
}


//Update the timer
function timer(){
    seconds ++;
    
    //Format our time
    let hrs=Math.floor(seconds/(3600));
    let mins =Math.floor((seconds -(hrs *3600))/60);
    let secs = seconds - (hrs * 3600) - (mins * 60);
    
    if(secs<10){
      secs ='0'+secs}
      
    if (mins<10){
     mins ='0'+ mins}
    
     if(hrs<10){
      hrs ='0'+hrs }
   
    timeEl.innerText = `${hrs}:${mins}:${secs}`;
}

function start(){
   timeEl.classList.add("light-blue");
   timeEl.classList.remove("gray");
   btnHome.disabled = false;
   btnGuest.disabled = false;
   btnPeriodOne.disabled = false;
   btnPeriodTwo.disabled = false;
   btnStop.disabled = false;
   btnReset.disabled = false;
   btnStart.disabled= true;


    if(interval){
        return
    }
    
    interval = setInterval(timer,1000)
    periodOne()
}

function stop(){
    resetBtn();
    btnReset.disabled = false;
    clearInterval(interval);
    interval =null;
}

function resetGame(){
    pointsHome =0;
    pointsGuest =0;
    stop();
    btnReset.disabled = true;
    seconds=0;
    periodEl.textContent=0
    homeEl.textContent =0;
    guestEl.textContent =0;
    timeEl.textContent="00:00:00";
    periodEl.classList.add("gray");
    periodEl.classList.remove("light-blue");
    timeEl.classList.add("gray");
    timeEl.classList.remove("light-blue"); 
    homeScore.classList.add("border-light-blue")
    homeScore.classList.remove("border-hightlight")
    guestScore.classList.add("border-light-blue")
    guestScore.classList.remove("border-hightlight")
   
}

