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
    
const submitButton = document.getElementsByClassName("submitButton")
const input = document.getElementsByClassName("weatherInput")

submitButton.addEventListener("click", e => {
    e.preventDefault();

    let location = input.value;

    fetch(`/weather?address=${location}`).then(response => {
        if (data.error) {

        }
    })
})




    







let futureDate = function (day) {
    let someDate = new Date();
    let addDays = day;
    someDate.setDate(someDate.getDate() + addDays);

    let dd = someDate.getDate();
    let mm = someDate.getMonth();
    let y = someDate.getFullYear();
    let d = someDate.getDay();


    let months1 = new Array();
    months1[0] = 'January';
    months1[1] = 'February';
    months1[2] = 'March';
    months1[3] = 'April';
    months1[4] = 'May';
    months1[5] = 'June';
    months1[6] = 'July';
    months1[7] = 'August';
    months1[8] = 'September';
    months1[9] = 'October';
    months1[10] = 'November';
    months1[11] = 'December';

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



// let APIcall = function(cityLocation) {
//     let weatherUrl = "https://api.darksky.net/forecast/3278ab7861ece66c23dae4b112c2d34b/37.8267,-122.4233" + cityLocation;
//     let apiKey = "3278ab7861ece66c23dae4b112c2d34b";
//     let unitType = "metric";
//     let daysTotal = 8;


    const forecast = (latitude, longitude, callback) => {
        const url = "https://api.darksky.net/forecast/3278ab7861ece66c23dae4b112c2d34b/37.8267,-122.4233";
    
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
    }

    const geocode = (address, callback) => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicm9ja2V0dG93biIsImEiOiJjanQ2ZmEyZnowZjloNDRtd2VtemR3dzZmIn0.JLgxwoeoCASsZ8WDYI3-5A`;
      
        request({ url, json: true }, (error, response) => {
          if (error) {
            callback("Unable to connect to location services!", undefined);
          } else if (response.body.features.length === 0) {
            callback("Unable to find location. Try another search.", undefined);
          } else {
            callback(undefined, {
              latitude: response.body.features[0].center[1],
              longitude: response.body.features[0].center[0],
              location: response.body.features[0].place_name
            });
          }
        });
      };

    const sevenDays = (latitude, longitude, callback) => {
        
    }
console.log(forecast)
console.log(geocode)

//     $.get({ url: weatherUrl + "&APPID=" + apiKey + "&units=" + unitType + "&cnt=" + daysTotal,
//     success: function(objectFromOWM){
//         getWeather(objectFromOWM);
//     },
//     error: function(){
//         console.log("error");
//     }
//     })
// }
