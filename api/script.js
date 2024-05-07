function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  

  var clock = document.getElementById('clock');
  clock.textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateClock, 1000);

function toggleBox() {
  var box = document.getElementById('box');
  if (box.style.display === 'none') {
      box.style.display = 'block';
  } else {
      box.style.display = 'none';
  }
}

const clickSound = document.getElementById('clickSound');

document.querySelectorAll('.image img').forEach(img => {
  img.addEventListener('click', () => {
    clickSound.currentTime = 0; // Rewind to the beginning
    clickSound.play();
  });
});


function closePopup(btn) {
  var parentInfo = btn.parentElement;
  parentInfo.style.display = 'none';
}



const API_KEY = '1e31db4e8ad797fd878b7b6dd3106430';
const california = {lat: '34.0522', lon: '-118.2437'};
const southkorea = {lat: '37.5519', lon: '126.9918'};
const unitedstates = {lat: '40.7128', lon: '-74.0060'};
const china = {lat: '39.9042', lon: '116.4074'};
const unitedkingdom = {lat: '51.5074', lon: '-0.1278'};
const canada = {lat: '43.65107', lon: '-79.347015'};
const australia = {lat: '33.8688', lon: '151.2093'};
const japan = {lat: '35.6895', lon: '139.6917'};
const france = {lat: '46.603354', lon: '1.888334'};
const russia = {lat: '55.7558', lon: '37.6176'};
const germany = {lat: '51.1657', lon: '10.4515'};
const mexico = {lat: '19.4326', lon: '-99.1332'};
const spain = {lat: '41.3851', lon: '2.1734'};
const brazil = {lat: '-14.2350', lon: '-51.9253'};


const getLocationData = (location) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
    .then((response) => response.json());
};

const displayWeatherData = (data, temperatureSelector, humiditySelector, weatherSelector) => {
  const temperatureElement = document.querySelector(temperatureSelector);
  const humidityElement = document.querySelector(humiditySelector);
  const weatherElement = document.querySelector(weatherSelector);

  const temperature = Math.round(data.main.temp - 273.15);
  const humidity = data.main.humidity;
  const weather = data.weather[0].description;

  temperatureElement.textContent = temperature;
  humidityElement.textContent = humidity;
  weatherElement.textContent = weather;
};

const toggleWeatherInfo = (location, cityName) => {
  const weatherInfo = document.querySelector(`.${cityName.toLowerCase()}-info`);
  if (weatherInfo.style.display === 'none') {
    getLocationData(location)
      .then((data) => {
        displayWeatherData(data, `.${cityName.toLowerCase()}-info .temperature`, `.${cityName.toLowerCase()}-info .humidity`, `.${cityName.toLowerCase()}-info .weather`);
        weatherInfo.style.display = 'block';
        // 이미지가 나타나도록 호출
        images.forEach(dropImage);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  } else {
    weatherInfo.style.display = 'none';
  }
};



document.querySelector('.image img:nth-child(1)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(california, 'california');
});

document.querySelector('.image img:nth-child(2)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(southkorea, 'southkorea');
});

document.querySelector('.image img:nth-child(3)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(unitedstates, 'unitedstates');
});
document.querySelector('.image img:nth-child(4)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(china, 'china');
});
document.querySelector('.image img:nth-child(5)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(unitedkingdom, 'unitedkingdom');
});
document.querySelector('.image img:nth-child(6)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(canada, 'canada');
});
document.querySelector('.image img:nth-child(7)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(australia, 'australia');
});
document.querySelector('.image img:nth-child(8)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(japan, 'japan');
});
document.querySelector('.image img:nth-child(9)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(france, 'france');
});
document.querySelector('.image img:nth-child(10)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(russia, 'russia');
});
document.querySelector('.image img:nth-child(11)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(germany, 'germany');
});
document.querySelector('.image img:nth-child(12)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(mexico, 'mexico');
});
document.querySelector('.image img:nth-child(13)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(spain, 'spain');
});
document.querySelector('.image img:nth-child(14)').addEventListener('click', function(event) {
  event.stopPropagation();
  toggleWeatherInfo(brazil, 'brazil');
});




let fallingAnimationInterval;

function startFallingAnimation(country) {
  const images = {
    "unitedkingdom": [
      "../api/assets/meatball2.png",
      "../api/assets/meatball3.png",
      "../api/assets/pasta1.png"
    ],
    "france": [
      "../api/assets/meatball2.png",
      "../api/assets/meatball3.png",
      "../api/assets/pasta1.png"
    ],
    "southkorea": [
      "../api/assets/egg1.png",
      "../api/assets/egg2.png",
      "../api/assets/egg3.png",
      "../api/assets/egg4.png",
    ],
    "california": [
      "../api/assets/egg1.png",
      "../api/assets/egg2.png",
      "../api/assets/egg3.png",
      "../api/assets/egg4.png",
    ],
    "japan": [
      "../api/assets/egg1.png",
      "../api/assets/egg2.png",
      "../api/assets/egg3.png",
      "../api/assets/egg4.png",
    ],
    "unitedstates": [
      "../api/assets/egg1.png",
      "../api/assets/egg2.png",
      "../api/assets/egg3.png",
      "../api/assets/egg4.png",
    ],
    "canada": [
      "../api/assets/ice1.png",
      "../api/assets/ice2.png",
      "../api/assets/ice3.png",
      "../api/assets/ice4.png",
      "../api/assets/ice5.png"
    ],
    "russia": [
      "../api/assets/ice1.png",
      "../api/assets/ice2.png",
      "../api/assets/ice3.png",
      "../api/assets/ice4.png",
      "../api/assets/ice5.png"
    ],
    "germany": [
      "../api/assets/soup1.png",
      "../api/assets/soup2.png",
      "../api/assets/soup3.png"
    ],
    "mexico": [
      "../api/assets/soup1.png",
      "../api/assets/soup2.png",
      "../api/assets/soup3.png"
    ],
    "china": [
      "../api/assets/soup1.png",
      "../api/assets/soup2.png",
      "../api/assets/soup3.png"
    ],
    "australia": [
      "../api/assets/soup1.png",
      "../api/assets/soup2.png",
      "../api/assets/soup3.png"
    ],
    "spain": [
      "../api/assets/meatball2.png",
      "../api/assets/meatball3.png",
      "../api/assets/pasta1.png"
    ],
    "brazil": [
      "../api/assets/soup1.png",
      "../api/assets/soup2.png",
      "../api/assets/soup3.png"
    ]
    
    
  };

  const container = document.querySelector(".falling-images-container");
  const countryImages = images[country];

  if (!countryImages) {
    return;
  }

  fallingAnimationInterval = setInterval(() => {
    const image = document.createElement("img");
    const randomIndex = Math.floor(Math.random() * countryImages.length);
    image.src = countryImages[randomIndex];
    image.classList.add("falling-image");
    image.style.left = `${Math.random() * 90 + 1}vw`;
    container.appendChild(image);

    setTimeout(() => {
      container.removeChild(image);
    }, 1000);
  }, 400); 
}

function stopFallingAnimation() {
  clearInterval(fallingAnimationInterval);
}



document.getElementById('unitedkingdom').addEventListener('click', () => {
  startFallingAnimation("unitedkingdom");
});
document.getElementById('france').addEventListener('click', () => {
  startFallingAnimation("france");
});
document.getElementById('southkorea').addEventListener('click', () => {
  startFallingAnimation("southkorea");
});
document.getElementById('california').addEventListener('click', () => {
  startFallingAnimation("california");
});
document.getElementById('japan').addEventListener('click', () => {
  startFallingAnimation("japan");
});
document.getElementById('unitedstates').addEventListener('click', () => {
  startFallingAnimation("unitedstates");
});
document.getElementById('canada').addEventListener('click', () => {
  startFallingAnimation("canada");
});
document.getElementById('russia').addEventListener('click', () => {
  startFallingAnimation("russia");
});
document.getElementById('germany').addEventListener('click', () => {
  startFallingAnimation("germany");
});
document.getElementById('mexico').addEventListener('click', () => {
  startFallingAnimation("mexico");
});
document.getElementById('china').addEventListener('click', () => {
  startFallingAnimation("china");
});
document.getElementById('australia').addEventListener('click', () => {
  startFallingAnimation("australia");
});
document.getElementById('spain').addEventListener('click', () => {
  startFallingAnimation("spain");
});
document.getElementById('brazil').addEventListener('click', () => {
  startFallingAnimation("brazil");
});

let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;
let lastMoveTime = 0;
let lastMoveX = 0;
let lastMoveY = 0;
let velocityX = 0;
let velocityY = 0;
let requestId = null;

const mapImg = document.querySelector('.background img');

mapImg.addEventListener('touchstart', function(event) {
  isDragging = true;
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
  lastMoveTime = performance.now();
  cancelAnimationFrame(requestId);
});

mapImg.addEventListener('touchmove', function(event) {
  if (isDragging) {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastMoveTime;
    lastMoveTime = currentTime;
    const deltaX = event.touches[0].clientX - startX;
    const deltaY = event.touches[0].clientY - startY;
    translateX += deltaX;
    translateY += deltaY;
    const currentMoveX = event.touches[0].clientX - lastMoveX;
    const currentMoveY = event.touches[0].clientY - lastMoveY;
    lastMoveX = event.touches[0].clientX;
    lastMoveY = event.touches[0].clientY;
    const smoothFactor = 0.9; // 부드러운 이동을 위한 상수
    velocityX = smoothFactor * (currentMoveX / deltaTime) + (1 - smoothFactor) * velocityX;
    velocityY = smoothFactor * (currentMoveY / deltaTime) + (1 - smoothFactor) * velocityY;
    mapImg.style.transform = `translate(${translateX}px, ${translateY}px)`;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }
});

mapImg.addEventListener('touchend', function() {
  isDragging = false;
  if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
    animateMap();
  }
});

function animateMap() {
  translateX += velocityX * 30;
  translateY += velocityY * 30;
  velocityX *= 0.95;
  velocityY *= 0.95;
  mapImg.style.transform = `translate(${translateX}px, ${translateY}px)`;
  if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
    requestId = requestAnimationFrame(animateMap);
  }
}

