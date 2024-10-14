window.addEventListener('load', () => {
  const images = [
    { src: '../one/images/1.jpg', location: 'New York - Flatiron', date: '2024-09-02', time: '16:18' },
    { src: '../one/images/2.jpg', location: 'New York - Chelsea', date: '2024-09-05', time: '14:00' },
    { src: '../one/images/3.jpg', location: 'New Jersey - Ridgefield', date: '2024-09-02', time: '17:46' },
    { src: '../one/images/4.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-02', time: '17:03' },
    { src: '../one/images/5.jpg', location: 'New York - Chelsea', date: '2024-09-09', time: '15:49' },
    { src: '../one/images/6.jpg', location: 'Jersey City - Newport', date: '2024-09-08', time: '16:27' },
    { src: '../one/images/7.jpg', location: 'New York - Soho', date: '2024-09-08', time: '15:56' },
    { src: '../one/images/8.jpg', location: 'New Jersey - Secaucus', date: '2024-09-02', time: '17:43' },
    { src: '../one/images/9.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-02', time: '17:03' },
    { src: '../one/images/10.jpg', location: 'Jersey City - Newport', date: '2024-09-08', time: '16:26' },
    { src: '../one/images/11.jpg', location: 'New York - Soho', date: '2024-09-08', time: '14:51' },
    { src: '../one/images/12.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-02', time: '17:29' },
    { src: '../one/images/13.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-02', time: '17:03' },
    { src: '../one/images/14.jpg', location: 'New York - Flatiron', date: '2024-09-02', time: '15:39' },
    { src: '../one/images/15.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-02', time: '17:14' },
    { src: '../one/images/16.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-02', time: '17:37' },
    { src: '../one/images/17.jpg', location: 'New York - Chelsea', date: '2024-09-08', time: '15:30' },
    { src: '../one/images/18.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-20', time: '10:34' },
    { src: '../one/images/19.jpg', location: 'Jersey City - Newport', date: '2024-09-08', time: '16:27' },
    { src: '../one/images/20.jpg', location: 'New York - Flatiron', date: '2024-09-02', time: '15:36' },
    { src: '../one/images/21.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-20', time: '10:34' },
    { src: '../one/images/22.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-20', time: '12:15' },
    { src: '../one/images/23.jpg', location: 'New Jersey - Journal Sq', date: '2024-09-20', time: '14:25' }
  ];

  const image = document.getElementById('image');

  // Select a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];
  image.src = randomImage.src;
  image.classList.add('show');
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.custom-button');
  const statResult = document.getElementById('stat-result');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Randomly generate statistics for each option
      const dogPercent = Math.floor(Math.random() * 101);
      const catPercent = Math.floor(Math.random() * (100 - dogPercent + 1));
      const sheepPercent = Math.floor(Math.random() * (100 - dogPercent - catPercent + 1));
      const hippoPercent = 100 - dogPercent - catPercent - sheepPercent;

      // Determine which animal was selected
      const selectedAnimal = button.getAttribute('data-animal');
      let selectedPercent;

      switch (selectedAnimal) {
        case 'dog':
          selectedPercent = dogPercent;
          break;
        case 'cat':
          selectedPercent = catPercent;
          break;
        case 'sheep':
          selectedPercent = sheepPercent;
          break;
        case 'hippo':
          selectedPercent = hippoPercent;
          break;
      }

      // Update the stat result text
      statResult.innerText = `${selectedAnimal} ${selectedPercent}% of people chose this option.`;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let currentPercent = 0;
  const loadingText = document.getElementById("loading-text");
  const loadingBar = document.querySelector(".loading-bar");

  const startTime = Date.now();
  const duration = 30000; // 30 seconds

  function updateLoading() {
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // progress from 0 to 1

    // 속도를 가변적으로 만들기 위해 이징 함수 사용 (예: easeInOut)
    const easedProgress = easeInOutQuad(progress);

    // 로딩 퍼센트를 계산
    currentPercent = Math.floor(easedProgress * 100);
    loadingText.innerText = `LOADING ${currentPercent}%`;

    // 로딩 바의 너비 업데이트
    loadingBar.style.width = `${currentPercent}%`;

    // 로딩이 100%에 도달하지 않으면 계속 호출
    if (currentPercent < 100) {
      requestAnimationFrame(updateLoading);
    }
  }

  // 이징 함수 (느리게 시작해서 빠르게 끝남)
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(updateLoading);
});
