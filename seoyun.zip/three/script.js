document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
  .then((response) => response.json())
  .then((items) => {
    console.log(items); // 데이터 로그로 확인
    const musicData = items;

    // 초기에는 원이 보이지 않도록 스타일 설정
    const circle = document.createElement('div');
    circle.classList.add('circle');
    document.body.appendChild(circle);
    circle.style.display = 'none';

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

      // kpop 필터링 시 원 추가
      if (genre === 0) {
        circle.style.display = 'block';
      } else {
        // kpop 필터링이 아닐 때는 원 제거
        circle.style.display = 'none';
      }
    }

    const filterButtons = document.querySelectorAll('.filter a');
    filterButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const genre = parseInt(this.dataset.index);
        console.log(genre); // 장르 로그로 확인
        filterMusic(genre);
      });
    });

    // 슬라이더 변경 이벤트 처리
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
          return 'red';
        case '2':
          return 'blue';
        case '3':
          return 'green';
        case '4':
          return 'yellow';
        case '5':
          return 'orange';
        case '6':
          return 'purple';
        default:
          return 'black';
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
