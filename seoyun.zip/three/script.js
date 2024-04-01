document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
  .then((response) => response.json())
  .then((items) => {
    console.log(items); // 데이터 로그로 확인
    const musicData = items;

    function filterMusic(genre) {
      const gridContainer = document.querySelector('.grid-container');
      gridContainer.innerHTML = '';

      console.log('musicData[genre]', musicData[genre]);

      musicData[genre].playlist.forEach(song => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        gridItem.innerHTML = `
          <img src="${song.image}" alt="${song.title}">
          <audio class="audio" controls loop>
            <source src="${song.audio}" type="audio/mpeg">
          </audio>
          <div class="caption">
            <p><strong>Title:</strong> ${song.title}</p>
            <p><strong>Artist:</strong> ${song.artist}</p>
            <p><strong>Date:</strong> ${new Date(song.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> ${song.location}</p>
            <p><strong>Source:</strong> ${song.source}</p>
          </div>
        `;

        gridContainer.appendChild(gridItem);
      });

    }

    const filterButtons = document.querySelectorAll('.filter a');
    filterButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const genre = parseInt(this.dataset.index);
        console.log(genre); 
        filterMusic(genre);
      });
    });


    const rangeInputs = document.querySelectorAll('.rangeInput');
    rangeInputs.forEach(input => {
      input.addEventListener('input', function() {
        const prefix = this.getAttribute('data-class-prefix');
        const value = this.value;

        if (prefix === 't_color-') {
          document.body.style.color = getColor(value);
          const elements = document.querySelectorAll(`[data-class-prefix="${prefix}"]`);
          elements.forEach(element => {
            element.style.color = getColor(value);
          });
        } else if (prefix === 'bg_color-') {
          document.body.style.backgroundColor = getColor(value);
        }
      });
    });

    function getColor(value) {
      switch (value) {
        case '1':
          return 'rgb(1, 255, 18)';
        case '2':
          return 'rgb(255, 255, 255)';
        case '3':
          return 'rgb(225, 225, 225)';
        case '4':
          return 'rgb(150, 150, 150)';
        case '5':
          return 'rgb(120, 120, 120)';
        case '6':
          return 'rgb(0, 0, 0)';
        default:
          return 'rgb(0, 0, 0)';
      }
    }
  });
});

function playAudio(element) {
  var audio = element.querySelector('.audio');
  audio.play();
}

function pauseAudio(element) {
  var audio = element.querySelector('.audio');
  audio.pause();
  audio.currentTime = 0; 
}
