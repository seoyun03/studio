document.addEventListener('DOMContentLoaded', () => {
  const images = [
    { 
      "src": "../one/images/1.jpg", 
      "topAnswer": "chameleon", 
      "statistics": { "Dog": 20, "chameleon": 50, "Sheep": 20, "lizard": 10 }, 
      "options": ["Dog", "chameleon", "Sheep", "lizard"],
      "question": "What shape do you see in this cloud?" 
    },
    { 
      "src": "../one/images/2.jpg", 
      "topAnswer": "teddy_bear", 
      "statistics": { "teddy_bear": 50, "scull": 10, "baby": 25, "bird": 15 }, 
      "options": ["teddy_bear", "scull", "baby", "bird"],
      "question": "Can you recognize a familiar shape in this cloud?" 
    },
    { 
      "src": "../one/images/3.jpg", 
      "topAnswer": "aligator", 
      "statistics": { "penguin": 10, "Tiger": 10, "aligator": 60, "Sheep": 20 }, 
      "options": ["penguin", "aligator", "Sheep", "Tiger"],
      "question": "What figure do you see in this cloud?" 
    },
    { 
      "src": "../one/images/4.jpg", 
      "topAnswer": "rat", 
      "statistics": { "seal": 5, "seagull": 5, "leaf": 25, "rat": 65 }, 
      "options": ["seal", "rat", "leaf", "seagull"],
      "question": "What animal or object comes to mind?" 
    },
    { 
      "src": "../one/images/5.jpg", 
      "topAnswer": "rabbit", 
      "statistics": { "rabbit": 50, "cat": 20, "dust": 10, "flower": 20 }, 
      "options": ["dust", "cat", "rabbit", "flower"],
      "question": "What image appears in this cloud?" 
    },    
    { 
      "src": "../one/images/6.jpg", 
      "topAnswer": "dog", 
      "statistics": { "car": 5, "heart": 5, "face": 25, "dog": 65 }, 
      "options": ["dog", "face", "heart", "car"],
      "question": "Can you spot a familiar shape?" 
    },    
    { 
      "src": "../one/images/7.jpg", 
      "topAnswer": "fox", 
      "statistics": { "fox": 50, "seahorse": 20, "cat": 15, "starfish": 15 }, 
      "options": ["fox", "starfish", "cat", "seahorse"],
      "question": "Does this cloud resemble any familiar object?" 
    },    
    { 
      "src": "../one/images/8.jpg", 
      "topAnswer": "Airplane", 
      "statistics": { "eagle": 5, "angel": 10, "Rocket": 20, "Airplane": 65 }, 
      "options": ["Airplane", "Rocket", "angel", "eagle"],
      "question": "What do you see in this cloud?" 
    },    
    { 
      "src": "../one/images/9.jpg", 
      "topAnswer": "fish", 
      "statistics": { "fish": 50, "whale": 20, "feather": 15, "flower": 15 }, 
      "options": ["feather", "whale", "flower", "fish"],
      "question": "What shape comes to mind?" 
    },    
    { 
      "src": "../one/images/10.jpg", 
      "topAnswer": "Seahorse", 
      "statistics": { "Fairy": 5, "Unicorn": 10, "Mermaid": 20, "Seahorse": 65 }, 
      "options": ["Seahorse", "Mermaid", "Unicorn", "Fairy"],
      "question": "What image is in this cloud?" 
    },
    { 
      "src": "../one/images/11.jpg", 
      "topAnswer": "Dreamy", 
      "statistics": { "Isolated": 5, "lovely": 10, "Calm": 20, "Dreamy": 65 }, 
      "options": ["lovely", "Calm", "Dreamy", "Isolated"],
      "question": "What emotion does this cloud seem to have?" 
    },
    { 
      "src": "../one/images/14.jpg", 
      "topAnswer": "lama", 
      "statistics": { "rabbit": 5, "lama": 50, "Sheep": 20, "Hippo": 25 }, 
      "options": ["rabbit", "lama", "Sheep", "Hippo"],
      "question": "What shape do you see in this cloud?" 
    },
    { 
      "src": "../one/images/15.jpg", 
      "topAnswer": "popcorn", 
      "statistics": { "popcorn": 50, "flower": 20, "fish_egg": 20, "bubble": 10 }, 
      "options": ["popcorn", "flower", "fish_egg", "bubble"],
      "question": "Can you spot a familiar shape?" 
    },
    { 
      "src": "../one/images/16.jpg", 
      "topAnswer": "Coastline", 
      "statistics": { "Desert": 5, "Ocean": 10, "Forest": 20, "Coastline": 65 }, 
      "options": ["Desert", "Ocean", "Forest", "Coastline"],
      "question": "Which landscape does this cloud remind you of?" 
    },
    { 
      "src": "../one/images/17.jpg", 
      "topAnswer": "pac_man", 
      "statistics": { "pac_man": 50, "Dragon": 20, "flower": 15, "Angel": 15 }, 
      "options": ["pac_man", "Dragon", "flower", "Angel"],
      "question": "What kind of object might live on this cloud?" 
    },
    { 
      "src": "../one/images/18.jpg", 
      "topAnswer": "seal", 
      "statistics": { "seal": 50, "Bird": 20, "Boat": 15, "Caterpillar": 15 }, 
      "options": ["seal", "Bird", "Boat", "Caterpillar"],
      "question": "Can you spot a familiar shape?" 
    },
    { 
      "src": "../one/images/19.jpg", 
      "topAnswer": "shrimp", 
      "statistics": { "shrimp": 50, "seahorse": 20, "baby": 15, "tulip": 15 }, 
      "options": ["shrimp", "seahorse", "baby", "tulip"],
      "question": "What does this cloud look like to you?" 
    },
    { 
      "src": "../one/images/20.jpg", 
      "topAnswer": "hippo", 
      "statistics": { "Face": 5, "person": 10, "Car": 20, "hippo": 65 }, 
      "options": ["Face", "person", "Car", "hippo"],
      "question": "Can you spot a familiar shape?" 
    },
    { 
      "src": "../one/images/22.jpg", 
      "topAnswer": "otter", 
      "statistics": { "otter": 50, "baby": 20, "fish": 15, "dog": 15 }, 
      "options": ["otter", "baby", "fish", "dog"],
      "question": "What shape do you see in this cloud?" 
    }
  ];

  const funFacts = [
    "A cloud can weigh as much as 100 elephants!",
    "There's a cloud in space that's colder than outer space itself.",
    "Lenticular clouds look just like UFOs.",
    "Clouds can move faster than race cars in storms.",
    "Some clouds are so lazy, they just sit still all day.",
    "Mammatus clouds look like brains in the sky.",
    "Fog is just a cloud that’s too lazy to float.",
    "Ever seen a cloud shaped like a dinosaur? You're not alone!",
    "Clouds can hold millions of gallons of water—then dump it all at once.",
    "Clouds can travel up to 100 mph on a windy day.",
    "The heaviest cloud weighs around 1.1 million pounds.",
    "“Morning Glory” clouds in Australia can stretch over 600 miles.",
    "Some clouds glow at night, making them the party clouds.",
    "Cumulonimbus clouds are like the skyscrapers of the sky.",
    "Clouds in space? Yes, they exist!",
    "Ever had a cloud follow you? No? Just me?",
    "Noctilucent clouds glow, making them sky’s night lights.",
    "Clouds can be art critics—they only show colors at sunrise and sunset.",
    "The fluffiest clouds are mostly made of air, not cotton candy.",
    "Stratus clouds are the blanket hogs of the sky."
  ];

  const imageElement = document.getElementById('image');
  const statResult = document.getElementById('stat-result');
  const buttonContainer = document.querySelector('.button-container');
  const questionElement = document.getElementById('question');
  const randomButton = document.getElementById('refresh');
  const funFactElement = document.getElementById('fun-fact');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Loading bar elements
  const loadingText = document.getElementById('loading-text');
  const loadingBar = document.querySelector('.loading-bar');
  let loadingComplete = false; // Track if the loading is already complete

  // Easing function for smooth, non-linear progress (easeInOutQuad)
  function easeInOutQuad(t) {
    return t < 0.5 ? 1.5 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  // Function to simulate loading progress with varying speed
  function startLoading(duration = 30000) { // Increased duration to 12 seconds
    if (loadingComplete) return; // Don't start loading if already complete

    let currentPercent = 0;
    const startTime = Date.now();

    // Function to update loading bar with easing
    function updateLoading() {
      const elapsedTime = Date.now() - startTime;
      const t = Math.min(elapsedTime / duration, 1); // Normalized time (0 to 1)
      
      // Apply easing function to simulate varying speed
      const progress = easeInOutQuad(t);

      currentPercent = Math.floor(progress * 100);
      loadingText.innerText = `LOADING ${currentPercent}%`;

      // Update the width of the loading bar
      loadingBar.style.width = `${currentPercent}%`;

      if (currentPercent < 100) {
        requestAnimationFrame(updateLoading); // Continue updating until complete
      } else {
        loadingComplete = true; // Mark the loading as complete
      }
    }

    requestAnimationFrame(updateLoading); // Start the loading animation
  }

  // Function to load a random image and update the content
  function loadRandomImage() {
    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Set image source and question
    imageElement.src = randomImage.src;
    imageElement.classList.add('show');
    questionElement.innerText = randomImage.question;

    // Store current image statistics and options
    const currentStatistics = randomImage.statistics;
    const currentOptions = randomImage.options;

    // Clear existing buttons
    buttonContainer.innerHTML = '';

    // Create checkboxes dynamically based on the current options
    currentOptions.forEach((option) => {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'custom-checkbox';
      checkbox.dataset.animal = option;

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` ${option}`));
      buttonContainer.appendChild(label);
    });

    // Event listener for dynamically created checkboxes
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          const animal = checkbox.dataset.animal;

          // Display the fixed percentage for the selected animal
          const percentage = currentStatistics[animal] || 0;
          statResult.innerHTML = `*${animal} was chosen by <span style="font-weight: 800;">${percentage}%</span> of people`;

          // Uncheck all other checkboxes except the one just checked
          checkboxes.forEach((cb) => {
            if (cb !== checkbox) {
              cb.checked = false;
            }
          });
        } else {
          // Clear the result if all checkboxes are unchecked
          const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
          if (checkedCheckboxes.length === 0) {
            statResult.innerText = '';
          }
        }
      });
    });

    // Update the fun fact
    displayRandomFact();
  }

  // Function to display a random fun fact
  function displayRandomFact() {
    // Get a random fun fact
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    funFactElement.innerHTML = `<strong>Fun Fact:</strong> ${randomFact}`;
  }

  // Initial random image and fun fact load
  startLoading(); // Start the loading only on initial page load
  loadRandomImage();

  // Event listener for the "Random" button to load another image and fun fact
  randomButton.addEventListener('click', () => {
    loadRandomImage(); // Loads a new random image and updates the fun fact
  });

  // Dark mode toggle
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
  
});

// 스포트라이트 원 요소 선택
const spotlight = document.createElement('div');
spotlight.classList.add('spotlight');
document.body.appendChild(spotlight);

let mouseX = 0, mouseY = 0; // 마우스의 현재 위치
let spotlightX = 0, spotlightY = 0; // 스포트라이트의 현재 위치

// 마우스 움직임을 감지하여 목표 위치 업데이트
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// 스포트라이트를 부드럽게 따라가게 하기 위한 애니메이션 함수
function animateSpotlight() {
  // 스포트라이트 위치를 목표 위치로 부드럽게 이동
  spotlightX += (mouseX - spotlightX) * 0.1;
  spotlightY += (mouseY - spotlightY) * 0.1;

  // 스포트라이트 위치 업데이트 (템플릿 리터럴로 변경)
  spotlight.style.left = `${spotlightX}px`;
  spotlight.style.top = `${spotlightY}px`;

  // 다음 프레임에서 애니메이션을 계속 실행
  requestAnimationFrame(animateSpotlight);
}

// 애니메이션 시작
animateSpotlight();
