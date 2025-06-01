document.addEventListener('DOMContentLoaded',()=>{

    
   const city_inp= document.getElementById("city-input");


   const weather_btn=document.getElementById("weather-btn");


   const weather_info=document.getElementById("weather-info");

   const temperature=document.getElementById("temperature");


    const city_name=document.getElementById("city-name");


    const description=document.getElementById("description");


    const error_message=document.getElementById("error-message");


    const API_KEY=" ";


    weather_btn.addEventListener("click",async ()=>{


       const city= city_inp.value.trim()


       if(!city) return;
       // 1. throw some error
       // 2. server/database is always in another continent
       // 3. Fetch api provide js interface making http request
       try {
        const weatherData=await fetchWeatherData(city);


        displayweather(weatherData)


       } catch (error) {
        showerror()
       }
    })
    async function fetchWeatherData(city){
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
const response=await fetch(url);

console.log(typeof response);




console.log("Response",response);


if(!response.ok){ //True

    throw new Error("City not Found")

}  
const data=await response.json()
return data
    }
    function displayweather(data){


        console.log(data)
        const{name,main,weather,}=data;

        city_name.textContent=name;

        weather_info.classList.remove('hidden')



        error_message.classList.add('hidden')

        temperature.textContent=`Temperature :${main.temp}`;

description.textContent=`Weather :${weather[0].description}`;
    }
    function showerror(){





        weather_info.classList.remove('hidden');


        error_message.classList.remove('hidden');
    }
})
