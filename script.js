let second = document.querySelector(".seconds");
let minute = document.querySelector(".minutes");
let hour = document.querySelector(".hours");


setInterval(() => {
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();

    second.style.transform = `rotate(${seconds*6}deg) translateY(-50%)`
    minute.style.transform = `rotate(${minutes*6}deg) translateY(-50%)`
    hour.style.transform = `rotate(${hours*30}deg) translateY(-50%)`

    console.log(seconds, minutes, hour);
}, 1000)