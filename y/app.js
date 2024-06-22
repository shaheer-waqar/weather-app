let cityName = document.getElementById("cityName");
let temperature = document.getElementById("temperature");
let feelLike = document.getElementById("feelLike");
let search = document.getElementById("search");
let wind = document.getElementById("wind");
let humidity1 = document.getElementById("humidity");
let mess= document.getElementById("mess");
let middle = document.getElementById("middle");
let foot = document.getElementById("foot")
mess.style.display = "none"



let city = document.getElementById("city");

let karachi = "karachi"
let URL = `https://api.openweathermap.org/data/2.5/weather?&appid=62660c8794fdd984241d4fa57cee47db&units=metric&q=`

let getWeather = async (city) =>{
  
   console.log("calling data");
  let promise = await fetch(URL+city);
  data = await promise.json();
  if(data.message === "city not found"){
    mess.style.display = "block"
    mess.innerHTML = data.message;
    middle.style.display = "none";
    foot.style.display = "none"
  }else if(city === ""){
    mess.innerHTML = "please Enter a valid city"
    mess.style.display = "block"
    middle.style.display = "none";
    foot.style.display = "none"
  }
  else{
    bg = document.querySelector("body")
    middle.style.display = "flex";
    foot.style.display = "flex"
    mess.style.display = "none"
    cityName.innerHTML = data.name
    temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
    feelLike.innerHTML = `feels like : ${Math.round(data.main.feels_like)}°C`
    humidity1.innerHTML = `${data.main.humidity}%`
    wind.innerHTML = `${Math.round((data.wind.speed * 3600)/1000)}Km/h`
    if(data.weather[0].main === "Haze"){
      bg.style.backgroundImage = "url('./bgclouds/haze.webp')";
    }else if(data.weather[0].main === "Clear"){
      bg.style.backgroundImage = "url('./bgclouds/clear.jpeg')";
    }else if(data.weather[0].main === "Rain"){
      bg.style.backgroundImage =  "url('./bgclouds/rain.jpeg')";
     }else if(data.weather[0].main === "Clouds"){
      bg.style.backgroundImage = "url('bgclouds/clouds.webp')";
     }else if(data.weather[0].main === "Thunderstrom"){
      bg.style.backgroundImage = url('bgclouds/thunder.webp');
     }else if(data.weather[0].main === "Snow"){
      bg.style.backgroundImage = "url('./bgclouds/snow.webp')";
     }

  }
  
}
search.addEventListener("click", ()=>{
  getWeather(city.value)
})
getWeather("karachi")
