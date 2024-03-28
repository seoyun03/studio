const jsonData = [
  {
      "title": "No Role Modelz",
      "artist": "J.Cole",
      "when": "2024-03-08T05:00:00.000Z",
      "where": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "What Would Pluto Do",
      "artist": "Drake",
      "when": "2024-03-08T05:00:00.000Z",
      "where": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "Talk to Me (feat. Drake)",
      "artist": "Drakeo the Ruler",
      "when": "2024-03-08T05:00:00.000Z",
      "where": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "Love Letter",
      "artist": "Frostydasnomann",
      "when": "2024-03-10T05:00:00.000Z",
      "where": "65 5th Ave",
      "source": "Spotify"
  },
  {
      "title": "Rich Flex",
      "artist": "Drake & 21 Savage",
      "when": "2024-03-11T04:00:00.000Z",
      "where": "Los Angeles",
      "source": "Apple Music"
  },
  {
      "title": "Loyal (feat. Lil Wayne & Tyga)",
      "artist": "Chris Brown",
      "when": "2024-03-11T04:00:00.000Z",
      "where": "Los Angeles",
      "source": "Spotify"
  },
  {
      "title": "Bad Bad Bad",
      "artist": "Young Thug",
      "when": "2024-03-12T04:00:00.000Z",
      "where": "Los Angeles",
      "source": "Apple Music"
  },
  {
      "title": "You Got It",
      "artist": "VEDO",
      "when": "2024-03-13T04:00:00.000Z",
      "where": "Los Angeles",
      "source": "Instagram"
  },
  {
      "title": "Easy Breezy",
      "artist": "Kiana Ledé",
      "when": "2024-03-14T04:00:00.000Z",
      "where": "220 W 24th St",
      "source": "Apple Music"
  },
  {
      "title": "Body a Canvas",
      "artist": "K CAMP",
      "when": "2024-03-18T04:00:00.000Z",
      "where": "Soho",
      "source": "Spotify"
  },
  {
      "title": "I Choose",
      "artist": "Layton Greene",
      "when": "2024-03-20T04:00:00.000Z",
      "where": "65 5th Ave",
      "source": "Apple Music"
  },
  {
      "title": "Make Me Wanna",
      "artist": "VEDO",
      "when": "2024-03-20T04:00:00.000Z",
      "where": "65 5th Ave",
      "source": "Apple Music"
  },
  {
      "title": "You",
      "artist": "Jacquees",
      "when": "2024-03-21T04:00:00.000Z",
      "where": "220 W 24th St",
      "source": "TikTok"
  },
  {
      "title": "For The Night",
      "artist": "Pop Smoke",
      "when": "2024-03-22T04:00:00.000Z",
      "where": "Soho",
      "source": "Spotify"
  },
  {
      "title": "Go Crazy",
      "artist": "Chris Brown & Young Thug",
      "when": "2024-03-24T04:00:00.000Z",
      "where": "65 5th Ave",
      "source": "Spotify"
  },
  {
      "title": "Nonstop",
      "artist": "Drake",
      "when": "2024-03-24T04:00:00.000Z",
      "where": "220 W 24th St",
      "source": "Apple Music"
  }
]
const images = document.querySelectorAll('.gallery .image');

images.forEach((image, index) => {
  const tooltip = image.querySelector('.tooltip');
  const data = jsonData[index];

  tooltip.innerHTML = `
    <p>Title: ${data.title}</p>
    <p>Artist: ${data.artist}</p>
    <p>When: ${new Date(data.when).toLocaleDateString()}</p>
    <p>Where: ${data.where}</p>
    <p>Source: ${data.source}</p>
  `;
});