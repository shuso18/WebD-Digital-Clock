
function chaloBhai(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let secPortion = seconds/60;
    let inpt = secPortion*360 + 'deg';

    let minPortion = minutes/60;
    let inpt1 = minPortion*360 + 'deg';

    let hrPortion = hours/12;
    let inpt2 = hrPortion*360 + minPortion*30 + 'deg';

    let secHand = document.getElementById("sechand");
    secHand.style.setProperty('--rotation', inpt);

    let minHand = document.getElementById("minhand");
    minHand.style.setProperty('--rotation', inpt1);

    let hrHand = document.getElementById("hrhand");
    hrHand.style.setProperty('--rotation', inpt2);

    let hours1 = hours;
    if (hours > 12){
        hours1 = hours -12;
        document.getElementById("mini4").innerHTML = "PM";
    }

    function ckeck10(element){
        if (element < 10){
            element = '0'+element;
        }
        return element;
    }

    hours1 = ckeck10(hours1);
    minutes = ckeck10(minutes);
    seconds = ckeck10(seconds);

    document.getElementById("mini1").innerHTML = hours1;

    document.getElementById("mini2").innerHTML = minutes;

    document.getElementById("mini3").innerHTML = seconds;
}
setInterval(chaloBhai, 1000);

// function hide(){
//     let clock = document.getElementById("clock");
//     clock.style.display = "none";
// }

function toggle(){
    let x = document.getElementById("clock")
    let y = document.getElementById("box2")
    let z = document.getElementById("text");


    if (x.style.display == "none"){
        y.style.display = "none";
        x.style.display = "flex";  
        z.style.visibility = "visible";      
    } else{
        x.style.display = "none";
        y.style.display = "grid";
        z.style.visibility = "hidden";
    }
    
}

function digiclock(){
       
}
