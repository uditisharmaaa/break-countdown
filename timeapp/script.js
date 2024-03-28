const daysEl = document.getElementById("days"); 
const hoursEl = document.getElementById("hours"); 
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds"); 
var whichbreak = 0 // will store what kind of break 

const fallBreak = "16 October 2024";
const springBreak = "16 March 2025"; 

//checking whether user has entered fall break or spring break and doing actions based on that 
const form = document.querySelector('.form form'); 
form.addEventListener('change', function(event) { 
    event.preventDefault(); 
    const selectedBreakType = document.getElementById('breakType').value; 
    if (selectedBreakType==='fall') {
        whichbreak = 0; 
        document.body.style.backgroundImage = "url('fall.jpg')"; 
    } else if (selectedBreakType === 'spring') {
        whichbreak = 1; 
        document.body.style.backgroundImage = "url('spring.jpg')";
    }

}); 
function countdown() { 

    const fallBreakDate = new Date(fallBreak)
    const springBreakDate = new Date(springBreak)
    const breakDatesArray = [fallBreakDate, springBreakDate]

    const currentDate = new Date()
    
    const totalSeconds = (breakDatesArray[whichbreak] - currentDate) / 1000; 
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days; 
    hoursEl.innerHTML = formatTime(hours); 
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}
function formatTime(time) { 
    return time < 10 ? `0${time}` : time;
}
//initial call 
countdown(); 
setInterval(countdown, 1000)


