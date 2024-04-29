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

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px'; // Set the cursor's left position
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px'; // Set the cursor's top position
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
  "../food/assets/meatball.png": "../food/assets/rainy.jpg",
  "../food/assets/icecream.png": "../food/assets/snowy.jpg",
  "../food/assets/soup.png": "../food/assets/cloudy.jpg"
};

container.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "img" && event.target.classList.contains("falling-image")) {
    const clickedImageSrc = event.target.getAttribute("src");
    const backgroundImgSrc = backgroundImages[clickedImageSrc];

    if (backgroundImgSrc) {
      const backgroundImg = document.querySelector(".background-image");
      backgroundImg.setAttribute("src", backgroundImgSrc);
    }

    const clickedImage = event.target;
    clickedImage.classList.toggle("clicked");
    audio.play();

    setTimeout(() => {
      container.removeChild(clickedImage);
    }, 100);
  }
});
