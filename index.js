function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h == 0){
        h=12;
    }

    if(h > 12){
        h = h -12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + " : " + m + " : " + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime,1000);

}

function showDay(){
    let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;


    document.getElementById("dayDisplay").innerText = date;
    document.getElementById("dayDisplay").textContent = date;

}

showTime();
showDay();

