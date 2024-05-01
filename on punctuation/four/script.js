
function showText(className) {
    var elements = document.querySelectorAll('.' + className);
    elements.forEach(function(element) {
      element.style.display = 'none';
    });
    var hoverText = document.querySelector('.hover-text.' + className);
    hoverText.style.display = 'block';
  }