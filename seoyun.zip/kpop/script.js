const musicData = [
  {
    "title": "Last Chance (feat. YUMDDA)",
    "artist": "Leellamarz & TOIL",
    "when": "2024-03-02T05:00:00.000Z",
    "where": "65 5th Ave",
    "source": "Apple Music"
  },
  {
    "title": "Hijack",
    "artist": "Heon Seo",
    "when": "2024-03-02T05:00:00.000Z",
    "where": "65 5th Ave",
    "source": "Apple Music"
  },
  {
    "title": "I can't be cool (with leellamarz)",
    "artist": "BOYCOLD",
    "when": "2024-03-02T05:00:00.000Z",
    "where": "65 5th Ave",
    "source": "Youtube"
  },
  {
    "title": "Love 119",
    "artist": "RIIZE",
    "when": "2024-03-02T05:00:00.000Z",
    "where": "220 W 24th St",
    "source": "Youtube"
  },
  {
    "title": "Attraction (feat. Dynamo Duo)",
    "artist": "BUMKEY",
    "when": "2024-03-02T05:00:00.000Z",
    "where": "65 5th Ave",
    "source": "Youtube"
  },
  {
    "title": "Pushin' N Pullin'",
    "artist": "Red Velvet",
    "when": "2024-03-10T05:00:00.000Z",
    "where": "California",
    "source": "Youtube"
  },
  {
    "title": "TyTy",
    "artist": "SOOJIN",
    "when": "2024-03-10T05:00:00.000Z",
    "where": "California",
    "source": "Apple Music"
  },
  {
    "title": "STUPID IN LOVE (feat. HUHYUNJIN)",
    "artist": "MAX",
    "when": "2024-03-08T05:00:00.000Z",
    "where": "220 W 24th St",
    "source": "Youtube"
  },
  {
    "title": "Super Shy",
    "artist": "NewJeans",
    "when": "2024-03-03T05:00:00.000Z",
    "where": "65 5th Ave",
    "source": "Youtube"
  },
  {
    "title": "Thirsty",
    "artist": "aespa",
    "when": "2024-03-05T05:00:00.000Z",
    "where": "10 W 32nd St",
    "source": "Unknown"
  },
  {
    "title": "Cupid (Twin Ver.)",
    "artist": "FIFTY FIFTY",
    "when": "2024-03-06T05:00:00.000Z",
    "where": "65 5th Ave",
    "source": "TikTok"
  },
  {
    "title": "BODY",
    "artist": "Highlight",
    "when": "2024-03-07T05:00:00.000Z",
    "where": "220 W 24th St",
    "source": "Youtube"
  },
  {
    "title": "Magnetic",
    "artist": "ILLIT",
    "when": "2024-03-25T04:00:00.000Z",
    "where": "220 W 24th St",
    "source": "Instagram"
  },
  {
    "title": "음악의 신",
    "artist": "SEVENTEEN",
    "when": "2024-03-14T04:00:00.000Z",
    "where": "10 W 32nd St",
    "source": "Youtube"
  },
  {
    "title": "with me",
    "artist": "0WAVE",
    "when": "2024-03-15T04:00:00.000Z",
    "where": "California",
    "source": "Apple Music"
    },
    {
    "title": "Love wins all",
    "artist": "IU",
    "when": "2024-03-18T04:00:00.000Z",
    "where": "10 W 32nd St",
    "source": "Unknown"
    },
    {
    "title": "EASY",
    "artist": "LE SSERAFIM",
    "when": "2024-03-07T05:00:00.000Z",
    "where": "220 W 24th St",
    "source": "Instagram"
    },
    {
    "title": "Smart",
    "artist": "LE SSERAFIM",
    "when": "2024-03-07T05:00:00.000Z",
    "where": "220 W 24th St",
    "source": "Instagram"
    },
    {
    "title": "Hell yea",
    "artist": "Leellamarz & Young B",
    "when": "2024-03-16T04:00:00.000Z",
    "where": "65 5th Ave",
    "source": "Apple Music"
    },
    {
    "title": "Drive mE cRaZy",
    "artist": "GIRIBOY",
    "when": "2024-03-20T04:00:00.000Z",
    "where": "65 5th Ave",
    "source": "TikTok"
    }
    ];

    function addMusicToList(musicItem) {
      const musicList = document.getElementById("musicList");
    
      // 음악 항목을 나타내는 HTML 요소 생성
      const musicItemElement = document.createElement("div");
      musicItemElement.classList.add("music-item");
    
      // 음악 제목 추가
      const titleElement = document.createElement("h2");
      titleElement.textContent = musicItem.title;
      musicItemElement.appendChild(titleElement);
    
      // 아티스트 추가
      const artistElement = document.createElement("p");
      artistElement.textContent = "Artist: " + musicItem.artist;
      musicItemElement.appendChild(artistElement);
    
      // 날짜 추가
      const dateElement = document.createElement("p");
      dateElement.textContent = "Date: " + new Date(musicItem.when).toLocaleDateString();
      musicItemElement.appendChild(dateElement);
    
      // 장소 추가
      const locationElement = document.createElement("p");
      locationElement.textContent = "Location: " + musicItem.where;
      musicItemElement.appendChild(locationElement);
    
      // 출처 추가
      const sourceElement = document.createElement("p");
      sourceElement.textContent = "Source: " + musicItem.source;
      musicItemElement.appendChild(sourceElement);
    
      // 음악 목록에 추가
      musicList.appendChild(musicItemElement);
    }
    
    // musicData의 각 항목을 HTML에 추가
    musicData.forEach(addMusicToList);