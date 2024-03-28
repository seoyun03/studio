document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
  
    gallery.addEventListener('mousedown', dragStart);
    gallery.addEventListener('touchstart', dragStart);
    gallery.addEventListener('mouseup', dragEnd);
    gallery.addEventListener('mouseleave', dragEnd);
    gallery.addEventListener('touchend', dragEnd);
    gallery.addEventListener('mousemove', drag);
    gallery.addEventListener('touchmove', drag);
  
    function dragStart(event) {
      if (event.type === 'touchstart') {
        startPosition = event.touches[0].clientX;
      } else {
        startPosition = event.clientX;
      }
      isDragging = true;
    }
  
    function drag(event) {
      if (isDragging) {
        const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        currentTranslate = prevTranslate + currentPosition - startPosition;
        gallery.style.transform = `translateX(${currentTranslate}px)`;
      }
    }
  
    function dragEnd() {
      prevTranslate = currentTranslate;
      isDragging = false;
    }
  });
  