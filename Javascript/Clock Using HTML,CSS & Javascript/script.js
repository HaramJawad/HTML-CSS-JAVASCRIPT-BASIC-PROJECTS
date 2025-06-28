setInterval(() => {
    date = new Date();
    hoursTime = date.getHours();
    minutesTime = date.getMinutes();
    secondsTime = date.getSeconds();
    HoursRotation = 30 * hoursTime + minutesTime / 2;
    MinutesRotation = 6 * minutesTime;
    SecondsRotation = 6 * secondsTime;
    Hour.style.transform = `rotate(${HoursRotation}deg)`;
    Minute.style.transform = `rotate(${MinutesRotation}deg)`;
    Second.style.transform = `rotate(${SecondsRotation}deg)`;
  }, 1000)