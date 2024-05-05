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

document.querySelector('.ok img').addEventListener('click', function() {
  document.querySelector('.alarm').style.display = 'none';
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
const audio = new Audio("../game/assets/click.mov"); 

let currentBackgroundIndex = 0; 
let score = 0; 
const scoreDisplay = document.getElementById("score");

const container = document.querySelector(".falling-images-container");
const maxFallingImages = 50; 


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
      
      // Set dataset for target using the index of the image in the array
      image.dataset.target = randomIndex; 
      
      image.classList.add("falling-image");
      image.style.left = `${Math.random() * 90 + 1}vw`;
      container.appendChild(image);

      fallingImagesCount++; // Increment the count of falling images

      setTimeout(() => {
          container.removeChild(image);
          fallingImagesCount--;
      }, 3000);
  }, 300);
}


container.addEventListener("click", (event) => {
  // Check if the clicked element is an image inside the container
  if (event.target.tagName.toLowerCase() === "img" && event.target.classList.contains("falling-image")) {
      const clickedImage = event.target;
      const clickedImageTarget = parseInt(clickedImage.dataset.target); // Get the target class of the clicked image

      // Increase score if the clicked image's target matches the current background index
      if (clickedImageTarget === currentBackgroundIndex) {
          score++; // Increase score
      } else {
          score = Math.max(score - 1, 0); // Decrease score but keep it >= 0
      }

      scoreDisplay.textContent = score; // Update score display

      clickedImage.classList.toggle("clicked");
      audio.play();

      setTimeout(() => {
          container.removeChild(clickedImage);
      }, 100);
  }
});



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





// Function to set a random background and corresponding icons
function setRandomBackground() {
    const backgrounds = document.querySelectorAll('.back img');
    const icons = document.querySelectorAll('.falling-images-container img');
    
    // Hide all backgrounds and icons
    backgrounds.forEach((img) => {
        img.style.display = "none";
    });
    icons.forEach((icon) => {
        icon.style.display = "none";
    });

    // Get a random index for the background
    currentBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    backgrounds[currentBackgroundIndex].style.display = "block";
    
    // Show icons corresponding to the current background
    const currentIconClass = backgrounds[currentBackgroundIndex].classList[1]; // Get class of current background
    icons.forEach((icon) => {
        if (icon.classList.contains(currentIconClass)) {
            icon.style.display = "block";
        }
    });
}


// Start the falling animation and set random background on page load
window.onload = function() {
  startFallingAnimation(images);
  setRandomBackground();
};

// Set random background every time the page is refreshed
window.onbeforeunload = setRandomBackground;




// Background images mapping
const backgroundImages = {
  sunny: "../game/assets/sunny.jpg",
  rainy: "../game/assets/rainy.jpg",
  snowy: "../game/assets/snowy.jpg",
  cloudy: "../game/assets/cloudy.jpg"
};

// Show initial background
changeBackground();

// Change background every time the page is loaded or refreshed
window.onload = changeBackground;


// Function to change background and show corresponding alarm image
function changeBackground() {
  const backgrounds = document.querySelectorAll('.back img');
  const alarmImages = document.querySelectorAll('.alarm-img');

  // Hide all backgrounds and alarm images
  backgrounds.forEach((bg) => {
      bg.style.display = "none";
  });
  alarmImages.forEach((img) => {
      img.style.display = "none";
  });

  // Get a random index for the background
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const currentBackground = backgrounds[randomIndex];
  currentBackground.style.display = "block";

  // Show alarm image corresponding to the current background
  const currentBackgroundClass = currentBackground.classList[1]; // Get class of current background
  alarmImages.forEach((img) => {
      if (img.classList.contains(currentBackgroundClass)) {
          img.style.display = "block";
      }
  });
}

