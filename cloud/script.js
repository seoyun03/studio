// 마우스 움직임에 따라 이미지 위치를 업데이트하는 함수
document.addEventListener('mousemove', (e) => {
  const layers = document.querySelectorAll('.parallax-layer');
  const speed = 0.05; // 움직임의 민감도를 조절하는 값

  layers.forEach((layer) => {
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      
      // 이미지의 위치를 마우스 움직임에 맞춰 이동
      layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
