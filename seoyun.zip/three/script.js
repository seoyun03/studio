document.addEventListener("DOMContentLoaded", function() {
fetch("data.json")
.then ((response) => response.json())
.then((items)=> {
    const musicData = [
    // 여기에 JSON 데이터를 입력합니다.
  ];
  function filterMusic(genre) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; 

    console.log('items[genre]', items[genre]);

    items[genre].playlist.forEach(song => {
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
        <p><strong>Date:</strong> ${new Date(song.when).toLocaleDateString()}</p>
        <p><strong>Location:</strong> ${song.where}</p>
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
      const genre = this.getAttribute('data-genre'); 
      const btnIndex = this.dataset.index
      filterMusic(btnIndex); 
    });
  });
});
})








    function playAudio(element) {
            var audio = element.querySelector('.audio');
            audio.play();
          }
          
          function pauseAudio(element) {
            var audio = element.querySelector('.audio');
            audio.pause();
            audio.currentTime = 0; 
          }