const six = document.querySelector('.six');
const seven = document.querySelector('.seven');

let timer;

function handleHover() {
    clearTimeout(timer);
    seven.classList.add('visible');
}

function handleMouseLeave() {
    timer = setTimeout(() => {
        seven.classList.remove('visible');
    }, 500);
}

six.addEventListener('mouseenter', handleHover);
six.addEventListener('mouseleave', handleMouseLeave);
seven.addEventListener('mouseenter', handleHover);
seven.addEventListener('mouseleave', handleMouseLeave);