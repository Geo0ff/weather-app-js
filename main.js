

function startTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    h = (h < 10) ? "0" + h:h;
    m = (m < 10) ? "0" + m:m;
    s = (s < 10) ? "0" + s:s;


    let time = h + ":" + m + ":" + s + "";
    
    document.getElementById('clockDisplay').innerText = time;
    document.getElementById('clockDisplay').innerContent = time;

    setTimeout(startTime, 1000);
}

startTime();


var getDate = new Date();
// document.getElementById("date").innerHTML = getDate.getFullYear();
// document.getElementById("date").innerHTML = getDate;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = months[getDate.getMonth()];





// getDate();

// var date = new Date();

//     function startDate() {
//         var d = date.getDate();
//         var mo = date.getMonth();
//         var y = date.getFullYear();
    
//         let date1 = d + "" + mo + "" + y;

//         document.getElementById("Date").innerHTML = date;

    
//         }
    
//         startDate();
    


//     document.getElementById("Date").innerHTML = date;


    // var d = new Date();

    // function day () {
    //     d.getDate();
    // }

    // function month() {
    //     d.getMonth();
    // }

    // function year() {
    //     d.getFullYear();
    // }



    


const currentLocation = document.getElementsByClassName('sevenDayForecast')
const currentTemp = document.getElementsByClassName('sevenDayTemperature')

