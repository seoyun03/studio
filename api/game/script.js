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

var isPlaying = false; // 음악이 현재 재생 중인지 여부를 저장하는 변수

function toggleMusic() {
  var audio = document.getElementById('bg-music');
  if (isPlaying) {
      audio.pause(); // 음악을 멈춤
  } else {
      audio.play(); // 음악을 재생
  }
  isPlaying = !isPlaying; // 재생 상태를 토글
}

// "ok" 이미지를 클릭하면 실행될 함수
document.querySelector('.ok img').addEventListener('click', function() {
  // "alarm" 요소 숨기기
  document.querySelector('.alarm').style.display = 'none';
  // "ok" 요소 숨기기
  document.querySelector('.ok').style.display = 'none';
});

const cursor = document.querySelector('.cursor');
const image = document.querySelector('.cursor img');

document.addEventListener('mousemove', (e) => {
  // Set the cursor's left position so that the image's center aligns with the cursor's x position
  cursor.style.left = e.pageX - image.width / 15 + 'px'; 
  // Set the cursor's top position so that the image's center aligns with the cursor's y position
  cursor.style.top = e.pageY - image.height / 15 + 'px'; 
});




const pan = document.querySelector(".image img");
const audio = new Audio("../game/assets/click.mov"); // Path to your sound file

let currentBackgroundIndex = 0; // Index to keep track of current background
let score = 0; // Initialize score
const scoreDisplay = document.getElementById("score");

const container = document.querySelector(".falling-images-container");
const maxFallingImages = 50; // Maximum number of falling images
let fallingAnimationInterval;

function startFallingAnimation(images) {
    if (!images || images.length === 0) {
        return;
    }

    let fallingImagesCount = 0; // Initialize the count of falling images

    fallingAnimationInterval = setInterval(() => {
        if (fallingImagesCount >= maxFallingImages) {
            return; // Stop creating new images if the maximum count is reached
        }

        const image = document.createElement("img");
        const randomIndex = Math.floor(Math.random() * images.length);
        image.src = images[randomIndex].src; // Get source directly from images array
        image.dataset.target = images[randomIndex].target; // Set dataset for target
        image.classList.add("falling-image");
        image.style.left = `${Math.random() * 90 + 1}vw`;
        container.appendChild(image);

        fallingImagesCount++; // Increment the count of falling images

        setTimeout(() => {
            container.removeChild(image);
            fallingImagesCount--;
        }, 4000);
    }, 400);
}


// Example usage
const images = [
    { src: "../game/assets/sunnysideup.png", target: 0 }, // 맑은 날
    { src: "../game/assets/meatball.png", target: 1 }, // 비오는 날
    { src: "../game/assets/icecream.png", target: 2 }, // 눈오는 날
    { src: "../game/assets/soup.png", target: 3 }, // 흐린 날
    { src: "../assets/egg1.png", target: 0 },
    { src: "../assets/egg2.png", target: 0 },
    { src: "../assets/egg3.png", target: 0 },
    { src: "../assets/egg4.png", target: 0 },
    { src: "../assets/ice1.png", target: 2 },
    { src: "../assets/ice2.png", target: 2 },
    { src: "../assets/ice3.png", target: 2 },
    { src: "../assets/ice4.png", target: 2 },
    { src: "../assets/ice5.png", target: 2 },
    { src: "../assets/ice6.png", target: 2 },
    { src: "../assets/meatball2.png", target: 1 },
    { src: "../assets/meatball3.png", target: 1 },
    { src: "../assets/pasta1.png", target: 1 },
    { src: "../assets/soup1.png", target: 3 },
    { src: "../assets/soup2.png", target: 3 },
    { src: "../assets/soup3.png", target: 3 },
];

// Start the falling animation with the provided images
startFallingAnimation(images);



function setRandomBackground() {
  const backgrounds = document.querySelectorAll('.back img');
  const alarms = document.querySelectorAll('.alarm');

  // Hide all backgrounds and alarms
  backgrounds.forEach((img) => {
      img.style.display = "none";
  });
  alarms.forEach((alarm) => {
      alarm.style.display = "none";
  });

  // Get a random index for the background
  currentBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  backgrounds[currentBackgroundIndex].style.display = "block";
  
  // Show alarm corresponding to the current background
  const currentBackgroundClass = backgrounds[currentBackgroundIndex].classList[1]; // Get class of current background
  alarms.forEach((alarm) => {
      if (alarm.classList.contains(currentBackgroundClass)) {
          alarm.style.display = "block";
      }
  });
}


// Show initial background on page load
window.onload = setRandomBackground;

// Change background every time the page is refreshed
window.onbeforeunload = setRandomBackground;

// Start the falling animation with the provided images
startFallingAnimation(images);

// Add event listener to the container to handle clicks on falling images
container.addEventListener("click", (event) => {
  // Check if the clicked element is an image inside the container
  if (event.target.tagName.toLowerCase() === "img" && event.target.classList.contains("falling-image")) {
      const clickedImage = event.target;
      const clickedImageSrc = clickedImage.getAttribute("src");
      const clickedImageTarget = parseInt(clickedImage.dataset.target); // Convert to integer

      // Check if clicked image target matches the current background
      if (clickedImageTarget === currentBackgroundIndex) {
          score++; // Increase score
          scoreDisplay.textContent = score; // Update score display
      }

      clickedImage.classList.toggle("clicked");
      audio.play();

      setTimeout(() => {
          container.removeChild(clickedImage);
      }, 100);
  }
});

document.querySelector('.ok').addEventListener('click', function() {
  var alarmElements = document.querySelectorAll('.alarm');
  alarmElements.forEach(function(element) {
      element.style.display = 'none';
  });
});

// 시작 시간 설정 (30초)
var timeLimit = 30;

// 시간을 나타내는 요소
var timeLimitDisplay = document.getElementById('time-limit');

// 시간을 1초마다 감소시키고 화면에 업데이트하는 함수
function updateTimer() {
    if (timeLimit > 0) {
        timeLimit--; // 시간 감소
        timeLimitDisplay.textContent = "TIME LIMIT: " + timeLimit; // 화면 업데이트
    } else {
        // 시간이 다 되면 게임 종료
        clearInterval(timerInterval); // 타이머 중지
        // 여기에 게임 종료 처리 추가
        alert("Time's up!");
        // 예를 들어 게임 종료 후 어떤 작업을 수행하거나 다른 함수를 호출할 수 있습니다.
    }
}

// 1초마다 updateTimer 함수 호출하여 시간 업데이트
var timerInterval = setInterval(updateTimer, 1000);
