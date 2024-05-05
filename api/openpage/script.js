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


 
function toggleImage(imageName) {
  var overlay = document.getElementById("overlay");
  var overlayImage = document.getElementById("overlay-image");
  
  if (imageName !== '') {
    overlayImage.src = "../openpage/assets/" + imageName;
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

