const imageContainers = document.querySelectorAll('.text-right > div');

imageContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    const image = container.querySelector('img');
    image.style.display = 'block';
  });

  container.addEventListener('mouseleave', () => {
    const image = container.querySelector('img');
    image.style.display = 'none';
  });
});
function playAudio(element) {
  var audio = element.querySelector('.audio');
  audio.play();
}

// 마우스가 떼질 때 음악을 멈추는 함수
function pauseAudio(element) {
  var audio = element.querySelector('.audio');
  audio.pause();
  audio.currentTime = 0; // 재생 위치 초기화
}