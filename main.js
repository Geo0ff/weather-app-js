






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


var getDate1 = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = getDate1.getFullYear();
document.getElementById("date").innerHTML = getDate1.getDate();
document.getElementById("date").innerHTML = months[getDate1.getMonth()];
let order =  getDate1.getDate() + " " + months[getDate1.getMonth()] + " " + getDate1.getFullYear();
document.getElementById("date").innerText = order
    
        




    







let futureDate = function (day) {
    let someDate = new Date();
    let addDays = day;
    someDate.setDate(someDate.getDate() + addDays);

    let dd = someDate.getDate();
    let mm = someDate.getMonth();
    let y = someDate.getFullYear();
    let d = someDate.getDay();


    let months = new Array();
    months[0] = 'January';
    months[1] = 'February';
    months[2] = 'March';
    months[3] = 'April';
    months[4] = 'May';
    months[5] = 'June';
    months[6] = 'July';
    months[7] = 'August';
    months[8] = 'September';
    months[9] = 'October';
    months[10] = 'November';
    months[11] = 'December';

    let day = new Array();
    day[0] = 'Sunday';
    day[1] = 'Monday';
    day[2] = 'Tuesday';
    day[3] = 'Wednesday';
    day[4] = 'Thursday';
    day[5] = 'Friday';
    day[6] = 'Saturday';

    let futureMonth = month[mm];
    let futureDay = day[d]

    let someFormattedDate = futureDay + ", " + futureMonth + ' '+ dd + ', '+ y;

    return someFormattedDate;
}



let APIcall = function(cityLocation) {
    let weatherUrl = "https://api.darksky.net/forecast/3278ab7861ece66c23dae4b112c2d34b/37.8267,-122.4233" + cityLocation;
    // let apiKey = "3278ab7861ece66c23dae4b112c2d34b";
    let unitType = "metric";
    let daysTotal = 8;


request((error, response) => {
    if (error) {
        callback("Unable to connect to weather service!", undefined)
    } else if (response.bodyAPIcall.error) {
        callback("Unable to find location", undefined)
    } else {
        callback(
            undefined,
            `It's ${response.body.currently.data.temperature} degrees out.`
        )
    }
})

console.log(APIcall)

//     $.get({ url: weatherUrl + "&APPID=" + apiKey + "&units=" + unitType + "&cnt=" + daysTotal,
//     success: function(objectFromOWM){
//         getWeather(objectFromOWM);
//     },
//     error: function(){
//         console.log("error");
//     }
//     })
// }
fdgdfg