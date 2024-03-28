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

// JSON 데이터를 가져와서 처리
fetch('musicData.json')
  .then(response => response.json())
  .then(data => {
    // musicData의 각 항목을 HTML에 추가
    data.forEach(addMusicToList);
  });
