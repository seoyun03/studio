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
        
        // 이전에 활성화된 버튼의 색상 클래스를 모두 제거합니다.
        document.querySelectorAll('.filter a').forEach(function(el) {
          el.classList.remove('active-kpop', 'active-rb', 'active-hiphop');
        });
    
        // 클릭된 버튼에 해당하는 데이터 속성을 기반으로 색상 클래스를 추가합니다.
        const genreName = this.getAttribute('data-genre');
        this.classList.add(`active-${genreName}`);
      });
    });

    const rangeInput = document.querySelector('.rangeInput');
    const gridContainer = document.querySelector('.grid-container');
    
    rangeInput.addEventListener('input', function() {
        const prefix = this.getAttribute('data-class-prefix');
        const value = this.value;
    
        if (prefix === 'zoom') {
            const scaleValue = 0.1 * parseInt(value);
            // 그리드 컨테이너의 클래스를 변경하여 그리드 레이아웃을 조정합니다.
            gridContainer.classList.remove('grid-container'); // 기존 클래스 제거
            gridContainer.classList.add('vertical-grid'); // 새로운 클래스 추가
            gridContainer.style.transition = 'all 0.5s ease'; // transition 효과 추가
        }
    });
    
    
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
