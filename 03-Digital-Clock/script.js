const time = document.querySelector('#time')
const date = document.querySelector('#date')
const day = document.querySelector('#day')




setInterval(function () {
    const newdate = new Date()
    time.innerHTML = newdate.toLocaleTimeString();
    date.innerHTML =newdate.toLocaleDateString('en-GB');

    let index =newdate.getDay()
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day.innerHTML = weekdays[index]

},1000)