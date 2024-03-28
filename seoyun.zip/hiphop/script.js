const jsonData = [
  {
      "title": "No Role Modelz",
      "artist": "J.Cole",
      "Date": "2024-03-08T05:00:00.000Z",
      "Location": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "What Would Pluto Do",
      "artist": "Drake",
      "Date": "2024-03-08T05:00:00.000Z",
      "Location": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "Talk to Me (feat. Drake)",
      "artist": "Drakeo the Ruler",
      "Date": "2024-03-08T05:00:00.000Z",
      "Location": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "Love Letter",
      "artist": "Frostydasnomann",
      "Date": "2024-03-10T05:00:00.000Z",
      "Location": "65 5th Ave",
      "source": "Spotify"
  },
  {
      "title": "Rich Flex",
      "artist": "Drake & 21 Savage",
      "Date": "2024-03-11T04:00:00.000Z",
      "Location": "Los Angeles",
      "source": "Apple Music"
  },
  {
      "title": "Loyal (feat. Lil Wayne & Tyga)",
      "artist": "Chris Brown",
      "Date": "2024-03-11T04:00:00.000Z",
      "Location": "Los Angeles",
      "source": "Spotify"
  },
  {
      "title": "Bad Bad Bad",
      "artist": "Young Thug",
      "Date": "2024-03-12T04:00:00.000Z",
      "Location": "Los Angeles",
      "source": "Apple Music"
  },
  {
      "title": "You Got It",
      "artist": "VEDO",
      "Date": "2024-03-13T04:00:00.000Z",
      "Location": "Los Angeles",
      "source": "Instagram"
  },
  {
      "title": "Easy Breezy",
      "artist": "Kiana Ledé",
      "Date": "2024-03-14T04:00:00.000Z",
      "Location": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "Body a Canvas",
      "artist": "K CAMP",
      "Date": "2024-03-18T04:00:00.000Z",
      "Location": "Soho",
      "source": "Spotify"
  },
  {
      "title": "I Choose",
      "artist": "Layton Greene",
      "Date": "2024-03-20T04:00:00.000Z",
      "Location": "65 5th Ave",
      "source": "Apple Music"
  },
  {
      "title": "Make Me Wanna",
      "artist": "VEDO",
      "Date": "2024-03-20T04:00:00.000Z",
      "Location": "65 5th Ave",
      "source": "Apple Music"
  },
  {
      "title": "You",
      "artist": "Jacquees",
      "Date": "2024-03-21T04:00:00.000Z",
      "Location": "220 W 24th St",
      "source": "TikTok"
  },
  {
      "title": "For The Night",
      "artist": "Pop Smoke",
      "Date": "2024-03-22T04:00:00.000Z",
      "Location": "Soho",
      "source": "Spotify"
  },
  {
      "title": "Go Crazy",
      "artist": "Chris Brown & Young Thug",
      "Date": "2024-03-24T04:00:00.000Z",
      "Location": "65 5th Ave",
      "source": "Spotify"
  },
  {
      "title": "Nonstop",
      "artist": "Drake",
      "Date": "2024-03-24T04:00:00.000Z",
      "Location": "220 W 24th St",
      "source": "Apple Music"
  }
]
const images = document.querySelectorAll('.gallery .image');

images.forEach((image, index) => {
  const tooltip = image.querySelector('.tooltip');
  const data = jsonData[index];

  tooltip.innerHTML = `
  <p><strong>Title:</strong> ${data.title}</p>
  <p><strong>Artist:</strong> ${data.artist}</p>
  <p><strong>Date:</strong> ${new Date(data.Date).toLocaleDateString()}</p>
  <p><strong>Location:</strong> ${data.Location}</p>
  <p><strong>Source:</strong> ${data.source}</p>
  `;
});

function playAudio(element) {
    var audio = element.querySelector('.audio');
    audio.play();
  }
  
  // 마우스가 떼질 때 음악을 멈추는 함수
  function pauseAudio(element) {
    var audio = element.querySelector('.audio');
    audio.pause();
    audio.currentTime = 0; // 재생 위치 초기화
  }