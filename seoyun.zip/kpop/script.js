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
