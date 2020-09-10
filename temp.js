function searchTemp() {
  hitToSearch();
}
// const input=document.getElementById('city-input');
// input.addEventListener('click',event=>{
//   console.log(event.log);
// })

// var input = document.getElementById("city-input");
// input.addEventListener("keyup", function(event) {
//   console.log("inside hit");
//   // if (event.keyCode === 13) {
//   //  event.preventDefault();
//   //  document.getElementById("enter-btn").click();
//   // }
// });

// var input = document.getElementById("city-input");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("enter-btn").click();
//   }
// });


function hitToSearch(){
  let cityName = document.getElementById('city-input').value;
  if (cityName === "") {
    alert("Enter City Name");
  }
  else {
    loadData(cityName);
    console.log("Load");
  }
}

function loadData(cityName) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9032b428eebd8c1851d5f84c53b8ff07`;

  document.getElementById('city-input').value = "";

  fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      if (data.cod == 404) {
        alert("Insert right name of your city");
      }
      else {
        //icon
        const weatherIconId = data.weather[0].icon;
        const weatherIconURL = `https://openweathermap.org/img/wn/${weatherIconId}@2x.png`;
        document.getElementById('weather-icon').src = weatherIconURL;

        //city name
        document.getElementById('city-name').innerText = data.name;

        //city temp
        cel = Math.floor(data.main.temp - 273.15);
        document.getElementById('city-temp').innerHTML = cel;

        //weather-hint
        document.getElementById('weather-hint').innerHTML = data.weather[0].main;

        //for showing data
        document.getElementById('weather-status').style.display='block';
      }
    })
}

