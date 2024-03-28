
document.addEventListener("DOMContentLoaded", function() {
    const musicData = [
        
            {
                "title": "Slow Motion",
                "artist": "Matt Champion & JENNIE",
                "when": "2024-03-14T04:00:00.000Z",
                "where": "Los Angeles",
                "source": "Apple Music"
            },
            {
                "title": "FRI(END)S",
                "artist": "V",
                "when": "2024-03-12T04:00:00.000Z",
                "where": "220 W 24th St",
                "source": "Youtube"
            },
            {
                "title": "Trap House (feat. Shoreline Mafia)",
                "artist": "03 Greedo",
                "when": "2024-03-18T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Spotify"
            },
            {
                "title": "bye",
                "artist": "Ariana Grande",
                "when": "2024-03-18T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Apple Music"
            },
            {
                "title": "All My Love",
                "artist": "Sabrina Claudio & Wale",
                "when": "2024-03-13T04:00:00.000Z",
                "where": "Los Angeles",
                "source": "Apple Music"
            },
            {
                "title": "need u the most",
                "artist": "Highvyn & Pixels",
                "when": "2024-03-15T04:00:00.000Z",
                "where": "JFK Airport",
                "source": "Youtube"
            },
            {
                "title": "Lostintranslation",
                "artist": "Mixed Matches",
                "when": "2024-03-16T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Spotify"
            },
            {
                "title": "pocket locket",
                "artist": "Alaina Castillo",
                "when": "2024-03-08T05:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Instagram"
            },
            {
                "title": "lavender (feat. Pink Sweat$)",
                "artist": "JVKE",
                "when": "2024-03-16T04:00:00.000Z",
                "where": "220 W 24th St",
                "source": "Youtube"
            },
            {
                "title": "IC+B",
                "artist": "Thomas Ng",
                "when": "2024-03-18T04:00:00.000Z",
                "where": "220 W 24th St",
                "source": "Apple Music"
            },
            {
                "title": "Cold (feat. Thomas Ng & I AM LUU)",
                "artist": "Seo actor & Dept",
                "when": "2024-03-20T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "TikTok"
            },
            {
                "title": "prove it",
                "artist": "21 Savage & Summer Walker",
                "when": "2024-03-20T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Apple Music"
            },
            {
                "title": "wherever u r",
                "artist": "UMI & V",
                "when": "2024-03-21T04:00:00.000Z",
                "where": "220 W 24th St",
                "source": "Apple Music"
            },
            {
                "title": "Better With You",
                "artist": "Jeff Bernat",
                "when": "2024-03-22T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Apple Music"
            },
            {
                "title": "BABYBLUE",
                "artist": "HNATA & Hanuel",
                "when": "2024-03-24T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Spotify"
            },
            {
                "title": "yes, and?",
                "artist": "Ariana Grande",
                "when": "2024-03-22T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Spotify"
            },
            {
                "title": "I'll Kill You (feat. Jhené Aiko)",
                "artist": "Summer Walker",
                "when": "2024-03-23T04:00:00.000Z",
                "where": "65 5th Ave",
                "source": "Apple Music"
            },
            {
                "title": "Personal",
                "artist": "Kehlani",
                "when": "2024-03-13T04:00:00.000Z",
                "where": "Los Angeles",
                "source": "Apple Music"
            },
            {
                "title": "Day 1 ◑",
                "artist": "HONNE",
                "when": "2024-03-14T04:00:00.000Z",
                "where": "Los Angeles",
                "source": "Spotify"
            },
            {
                "title": "golden hour",
                "artist": "JVKE",
                "when": "2024-03-15T04:00:00.000Z",
                "where": "Los Angeles",
                "source": "Apple Music"
            }
        ]
    

            const gridItems = document.querySelectorAll('.grid-item');

            musicData.forEach((data, index) => {
                const item = gridItems[index];
                const caption = document.createElement('div');
                caption.classList.add('caption');
                caption.innerHTML = `
                    <p><strong>Title:</strong> ${data.title}</p>
                    <p><strong>Artist:</strong> ${data.artist}</p>
                    <p><strong>Date:</strong> ${new Date(data.when).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> ${data.where}</p>
                    <p><strong>Source:</strong> ${data.source}</p>
                `;
                item.appendChild(caption);
            });
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