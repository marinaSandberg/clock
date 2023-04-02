(function DateClock() {
    let dt = document.querySelector("#date");
    let cl = document.querySelector("#clock");
    let d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDay();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;


    dt.textContent = year + "." + month + "." + day;

    cl.textContent = hours + ":" + min + ":" + sec;

    setTimeout(DateClock, 1000);
})();

