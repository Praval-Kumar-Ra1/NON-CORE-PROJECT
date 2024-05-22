const apiUrl = "https://api.weatherapi.com/v1/current.json?units=metric&q=";//open weather api
      const apiKey = "dafe91cf1f814530b8671454241405";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather img");

      async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&key=${apiKey}`);
        
        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();

            document.querySelector(".city").innerHTML = data.location.name;
            document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
            document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";
            
            const condition = data.current.condition.text.toLowerCase();

            if (condition === "sunny") {
                weatherIcon.src = "images/sunny.png";
            } else if (condition === "cloudy") {
                weatherIcon.src = "images/cloudy.jpeg";
            } else if (condition === "rainy") {
                weatherIcon.src = "images/5 rain.png";
            } else if (condition === "mist") {
                weatherIcon.src = "images/mist.png";
            } else if (condition === "partly cloudy") {
                weatherIcon.src = "images/partly cloud.png";
            } else if (condition === "foggy") {
                weatherIcon.src = "images/foggy.png";
            } else if (condition === "snowy") {
                weatherIcon.src = "images/snowy.png";
            } else if (condition === "stormy") {
                weatherIcon.src = "images/stormy.png";
            } else if (condition === "chilly") {
                weatherIcon.src = "images/chilly.png";
            } else if (condition === "overcast") {
                weatherIcon.src = "images/overcast.png";
            } else if (condition === "clear") {
                weatherIcon.src = "images/clear.jpeg";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            console.log(condition);
        }
    } catch (error) {
        console.error("Error fetching the weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}


      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });
        
       
      
     

function updateTimeAndDate() {
    const now = new Date();
    
    // Format date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, dateOptions);
    
    // Format time
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
    
    // Update HTML
    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
}



// Update date and time immediately
updateTimeAndDate();

// Update date and time every second
setInterval(updateTimeAndDate, 1000);
