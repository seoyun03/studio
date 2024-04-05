document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
  .then((response) => response.json())
  .then((items) => {
      console.log(items);
      const musicData = items;

      const gallery = document.querySelector('.gallery');
      const grid = document.querySelector('.grid-container');

      console.log('items', items);
      

      const renderItem = (song, type) => {
        const gridItem = document.createElement('div');

        gridItem.innerHTML = `
            <img src="${song.image}" alt="${song.title}" onclick="playAudio(this)">
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


        if(type == 'marquee'){
          console.log('marquee');
          gallery.appendChild(gridItem);
          gridItem.classList.add('image');

        } else{
          console.log('grid');

          grid.appendChild(gridItem);
          gridItem.classList.add('grid-item');
        }

        gridItem.addEventListener('mouseenter', (e) => playAudio(e.target))
        gridItem.addEventListener('mouseleave', (e) => pauseAudio(e.target))
      }
      

      console.log('musicData', musicData);

      // render the marquee
      musicData.forEach((genre) => {
        genre.playlist.forEach(song => {
          renderItem(song, 'marquee')
        })
      })

      // render the grid
      musicData.forEach((genre) => {
        genre.playlist.forEach(song => {
          renderItem(song, 'grid')
        })
      })

      function filterMusic(genre) {
        //hide marquee and show grid
        grid.classList.remove('hidden')
        gallery.classList.add('hidden')

          const gridContainer = document.querySelector('.grid-container');
          gridContainer.innerHTML = '';

          console.log('musicData[genre]', musicData[genre]);

          musicData[genre].playlist.forEach(song => {
              renderItem(song)
          });

          showRangeInput();
      }

      const filterButtons = document.querySelectorAll('.filter a');
      filterButtons.forEach(button => {
          button.addEventListener('click', function(event) {
              event.preventDefault();
              const genre = parseInt(this.dataset.index);
              console.log(genre); 
              filterMusic(genre);
              
              document.querySelectorAll('.filter a').forEach(function(el) {
                  el.classList.remove('active-kpop', 'active-rb', 'active-hiphop');
              });
          
              const genreName = this.getAttribute('data-genre');
              this.classList.add(`active-${genreName}`);
          });
      });

      const rangeInput = document.querySelector('.rangeInput');
      const gridContainer = document.querySelector('.grid-container');
      
      rangeInput.addEventListener('input', function() {
          const value = this.value;
          const columnCount = 6 - parseInt(value);

          gridContainer.style.transition = 'grid-column-gap 1s ease, grid-template-columns 1s ease'; // 변경된 부분: transition 효과를 더 부드럽게 설정
          gridContainer.style.gridTemplateColumns = `repeat(${columnCount}, minmax(0, 1fr))`;
          gridContainer.style.gridColumnGap = '10px'; // 변경된 부분: 그리드 열 사이의 간격을 조정
      });

      document.querySelector('.dashboard_inputs').style.display = 'none';

      function showRangeInput() {
          document.querySelector('.dashboard_inputs').style.display = 'block';
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
