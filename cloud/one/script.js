function showRandomImage(columnId) {
    const images = document.querySelectorAll(`#${columnId} img`);
    images.forEach(img => img.style.display = 'none'); // 모든 이미지를 숨김
    const randomIndex = Math.floor(Math.random() * images.length);
    images[randomIndex].style.display = 'block'; // 랜덤한 이미지를 보여줌
  }

  function startImageRotation() {
    setInterval(() => {
      showRandomImage('column1'); // 첫 번째 열의 이미지 변경
      showRandomImage('column2'); // 두 번째 열의 이미지 변경
    }, 1000); // 1초 간격으로 변경
  }

  window.onload = () => {
    // 페이지 로드 시 각 열에서 첫 번째 이미지를 기본으로 보여줌
    showRandomImage('column1');
    showRandomImage('column2');
    startImageRotation();
  };