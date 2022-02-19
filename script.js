function fetchData() {
    let place = l_name.value;
    const API_KEY = "6fa99e1f96f024f79970c5a3532b2ac6";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => populateValue(data))
      .catch("failed to fetch ");
  }
  function populateValue(data) {
    let location = data.name;
    let temp = Math.floor(data.main.temp);
    let feels = data.main.feels_like;
    let weather = data.weather[0].icon;
    let speed = data.wind.speed;
    let country = data.sys.country;
    let pressure = data.main.pressure;
    let humidity = data.main.humidity;

    let html_data = `<div class="card" style="width: 100%;">
<div class="card-body">
  <h5 class="card-title">Place name: ${location}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Country: ${country}</li>
  <li class="list-group-item">Temperature: ${temp}<sup>°C</sup></li>
  <li class="list-group-item">Feels like: ${feels}</li>
  <li class="list-group-item">Wind: ${speed}</li>
  <li class="list-group-item">Weather: ${weather}</li>
  <li class="list-group-item">Pressure: ${pressure}</li>
  <li class="list-group-item">Humidity: ${humidity}</li>
</ul>

</div>`;
let place_data=`<h1>${location}</h1>`
let temp_data=`<h3>${temp}<sup>°C</sup></h3>`
    var dt = new Date();
    document.getElementById("date-time").innerHTML = dt;
    document.querySelector("#result").innerHTML = html_data;
    document.querySelector("#location").innerHTML=place_data;
    document.querySelector("#place_temp").innerHTML=temp_data;

  }
  

