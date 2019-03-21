function startTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = ""
   



    if (h >= 12) {
        session = ""
        
    }


    h = (h < 10) ? "0" + h:h;
    m = (m < 10) ? "0" + m:m;
    s = (s < 10) ? "0" + s:s;


    let time = h + ":" + m + ":" + s + "" + session;
    
    document.getElementById('clockDisplay').innerText = time;
    document.getElementById('clockDisplay').innerContent = time;

    setTimeout(startTime, 1000);
  }

    startTime();


const currentLocation = document.getElementsByClassName('sevenDayForecast')
const currentTemp = document.getElementsByClassName('sevenDayTemperature')

