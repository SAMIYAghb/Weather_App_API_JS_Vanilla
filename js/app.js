// fetch("https://api.openweathermap.org/data/2.5/forecast?q=${newName}&appid=5c04612092f1547532b4ff6d5b162044")

const weatherApi = {
    key : "5c04612092f1547532b4ff6d5b162044",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox = document.getElementById('input-box');

//Event listener on keypress
//keyCode == 13 => Enter
searchInputBox.addEventListener('keypress', (event) =>{
    if(event.keyCode == 13){
        // console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }   
});

//get weather report
function getWeatherReport(city) {
        fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
    }
    
    // Show Weather Report
    function showWeatherReport(weather){
        // console.log(weather);
    
        let city = document.getElementById('city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
    
        let temperature = document.getElementById('temp');
        temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    
        let minMaxTemp = document.getElementById('min-max');
        minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
    
        let weatherType = document.getElementById('weather');
        weatherType.innerText = `${weather.weather[0].main}`;
    
        let date = document.getElementById('date');
        let todayDate = new Date();
        date.innerText = dateManage(todayDate);
    
        
        if(weatherType.textContent == 'Clear') {
            document.body.style.backgroundImage = "url('images/clear.jpg')";
            
        } else if(weatherType.textContent == 'Clouds') {
    
            document.body.style.backgroundImage = "url('images/cloud.jpg')";
            
        } else if(weatherType.textContent == 'Haze') {
    
            document.body.style.backgroundImage = "url('images/cloud.jpg')";
            
        }     else if(weatherType.textContent == 'Rain') {
            
            document.body.style.backgroundImage = "url('images/rain.jpg')";
            
        } else if(weatherType.textContent == 'Snow') {
            
            document.body.style.backgroundImage = "url('images/snow.jpg')";
        
        } else if(weatherType.textContent == 'Thunderstorm') {
        
            document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
            
        } 
    }
    
//Date manage 
function dateManage(dateArg){
    let days = [ "Sunday","Monday","Tuesday","Wednesunday","Thursday","friday","Saturday"];
    let months =[ "Juanuary","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
};
getWeatherReport('paris');
