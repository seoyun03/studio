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
const container = document.querySelector(".falling-images-container");
const audio = new Audio("../food/assets/click.mov"); // Path to your sound file
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
    image.src = images[randomIndex];
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

function stopFallingAnimation() {
  clearInterval(fallingAnimationInterval);
}

// Example usage
const images = [
  "../food/assets/sunnysideup.png",
  "../food/assets/meatball.png",
  "../food/assets/icecream.png",
  "../food/assets/soup.png",
  "../assets/egg1.png",
  "../assets/egg2.png",
  "../assets/egg3.png",
  "../assets/egg4.png",
  "../assets/ice1.png",
  "../assets/ice2.png",
  "../assets/ice3.png",
  "../assets/ice4.png",
  "../assets/ice5.png",
  "../assets/ice6.png",
  "../assets/meatball2.png",
  "../assets/meatball3.png",
  "../assets/pasta1.png",
  "../assets/soup1.png",
  "../assets/soup2.png",
  "../assets/soup3.png",
];

// Start the falling animation with the provided images
startFallingAnimation(images);

// Add event listener to the container to handle clicks on falling images
container.addEventListener("click", (event) => {
  // Check if the clicked element is an image inside the container
  if (event.target.tagName.toLowerCase() === "img" && event.target.classList.contains("falling-image")) {
    const clickedImage = event.target;

    clickedImage.classList.toggle("clicked");

    audio.play();

    setTimeout(() => {
      container.removeChild(clickedImage);
    }, 100);
  }
});
const backgroundImages = {
  "../food/assets/sunnysideup.png": "../food/assets/sunny.jpg",
  "../assets/egg1.png": "../food/assets/sunny.jpg",
  "../assets/egg2.png": "../food/assets/sunny.jpg",
  "../assets/egg3.png": "../food/assets/sunny.jpg",
  "../assets/egg4.png": "../food/assets/sunny.jpg",
  "../food/assets/meatball.png": "../food/assets/rainy.jpg",
  "../assets/meatball2.png": "../food/assets/rainy.jpg",
  "../assets/meatball3.png": "../food/assets/rainy.jpg",
  "../assets/pasta1.png": "../food/assets/rainy.jpg",
  "../food/assets/icecream.png": "../food/assets/snowy.jpg",
  "../assets/ice1.png": "../food/assets/snowy.jpg",
  "../assets/ice2.png": "../food/assets/snowy.jpg",
  "../assets/ice3.png": "../food/assets/snowy.jpg",
  "../assets/ice4.png": "../food/assets/snowy.jpg",
  "../assets/ice5.png": "../food/assets/snowy.jpg",
  "../assets/ice6.png": "../food/assets/snowy.jpg",
  "../food/assets/soup.png": "../food/assets/cloudy.jpg",
  "../assets/soup1.png": "../food/assets/cloudy.jpg",
  "../assets/soup2.png": "../food/assets/cloudy.jpg",
  "../assets/soup3.png": "../food/assets/cloudy.jpg"
};

container.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "img" && event.target.classList.contains("falling-image")) {
    const clickedImageSrc = event.target.getAttribute("src");
    const backgroundImgSrc = backgroundImages[clickedImageSrc];

    if (backgroundImgSrc) {
      // 모든 배경 이미지를 선택
      const backgroundImgs = document.querySelectorAll(".background-image");
      // 각각의 배경 이미지에 대해 속성 변경
      backgroundImgs.forEach((backgroundImg) => {
        // 해당 이미지와 일치하는 배경 이미지인 경우에만 속성 변경
        if (backgroundImg.getAttribute("src") === backgroundImgSrc) {
          backgroundImg.style.display = "block";
        } else {
          backgroundImg.style.display = "none";
        }
      });
    }

    const clickedImage = event.target;
    clickedImage.classList.toggle("clicked");
    audio.play();

    setTimeout(() => {
      container.removeChild(clickedImage);
    }, 100);
  }
});

