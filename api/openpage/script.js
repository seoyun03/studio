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

  setTimeout(function() {
    document.querySelector(".gif-container").style.display = "none";
    document.querySelector(".openpage-container").style.display = "block";
  }, 9500); // 9500 milliseconds = 9.5 seconds

  