window.addEventListener('load', () => {
  const images = [
    { 
      src: '../one/images/1.jpg', 
      topAnswer: 'Dog', 
      statistics: { Dog: 40, Cat: 30, Sheep: 20, Hippo: 10 }, 
      options: ['Dog', 'Cat', 'Sheep', 'Hippo'],
      question: 'What shape do you see in this cloud?' 
    },
    { 
      src: '../one/images/2.jpg', 
      topAnswer: 'Cat', 
      statistics: { Dog: 25, Cat: 50, Elephant: 15, Lion: 10 }, 
      options: ['Dog', 'Cat', 'Elephant', 'Lion'],
      question: 'What feeling does this cloud give you?' 
    },
    { 
      src: '../one/images/3.jpg', 
      topAnswer: 'Sheep', 
      statistics: { Giraffe: 20, Cat: 10, Sheep: 50, Tiger: 20 }, 
      options: ['Giraffe', 'Cat', 'Sheep', 'Tiger'],
      question: 'Does this cloud evoke a memory?' 
    },
    { 
      src: '../one/images/4.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What animal or object comes to mind?' 
    },
    { 
      src: '../one/images/5.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What part of nature does this cloud resemble?' 
    },    
    { 
      src: '../one/images/6.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'Can you spot a familiar shape?' 
    },    
    { 
      src: '../one/images/7.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'If this cloud had an emotion, what would it be?' 
    },    
    { 
      src: '../one/images/8.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'If this cloud were a piece of art, what would the title be?' 
    },    
    { 
      src: '../one/images/9.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What would you name this cloud shape?' 
    },    
    { 
      src: '../one/images/10.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What fantasy creature could this be?' 
    },
    { 
      src: '../one/images/11.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What emotion does this cloud seem to have?' 
    },
    { 
      src: '../one/images/12.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'Does this cloud look like it’s moving or still?' 
    },    
    { 
      src: '../one/images/13.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'If this cloud were a part of a dream you’ve had, what was happening?' 
    },
    { 
      src: '../one/images/14.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'If you could jump into this cloud, where would it take you?' 
    },
    { 
      src: '../one/images/15.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'Does this cloud look like something you’ve seen before?' 
    },
    { 
      src: '../one/images/16.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What artwork does this cloud remind you of?' 
    },
    { 
      src: '../one/images/17.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What kind of creature might live on this cloud?' 
    },
    { 
      src: '../one/images/18.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'Does this cloud look like something from another planet?' 
    },
    { 
      src: '../one/images/19.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What would this cloud taste like if it were food?' 
    },
    { 
      src: '../one/images/20.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'If this cloud had eyes, what would it be looking at?' 
    },
    { 
      src: '../one/images/21.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What hidden treasure might be inside this cloud?' 
    },
    { 
      src: '../one/images/22.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What creature might live on top of this cloud?' 
    },
    { 
      src: '../one/images/23.jpg', 
      topAnswer: 'Hippo', 
      statistics: { Bear: 5, Cat: 10, Sheep: 20, Hippo: 65 }, 
      options: ['Bear', 'Cat', 'Sheep', 'Hippo'],
      question: 'What kind of puzzle could you solve using this cloud?' 
    }
  ];

  const imageElement = document.getElementById('image');
  const statResult = document.getElementById('stat-result');
  const buttonContainer = document.querySelector('.button-container');
  const questionElement = document.getElementById('question');

  // Select a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];
  imageElement.src = randomImage.src;
  imageElement.classList.add('show');

  // Display the question for the selected image
  questionElement.innerText = randomImage.question;

  // Store current image statistics and options to display on click
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

        // Update the stat result text
        statResult.innerText = `*${animal} was chosen by ${percentage}% of people`;

        // Check if the answer is the top answer for the current image
        if (randomImage.topAnswer === animal) {
          statResult.innerText += ' - This is the top answer!';
        }

        // Uncheck all other checkboxes except the one just checked
        checkboxes.forEach((cb) => {
          if (cb !== checkbox) {
            cb.checked = false;
          }
        });
      } else {
        // If all checkboxes are unchecked, clear the result
        const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
        if (checkedCheckboxes.length === 0) {
          statResult.innerText = '';
        }
      }
    });
  });

  // 로딩 애니메이션 부분
  let currentPercent = 0;
  const loadingText = document.getElementById("loading-text");
  const loadingBar = document.querySelector(".loading-bar");

  const startTime = Date.now();
  const duration = 60000; // 60 seconds (로딩 시간을 1분으로 설정)

  function updateLoading() {
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // progress from 0 to 1

    // 속도를 가변적으로 만들기 위해 이징 함수 사용 (예: easeInOut)
    const easedProgress = easeInOutQuad(progress);

    // 로딩 퍼센트를 계산
    currentPercent = Math.floor(easedProgress * 100);
    loadingText.innerText = `LOADING ${currentPercent}%`;

    // 로딩 바의 너비 업데이트
    loadingBar.style.width = `${currentPercent}%`;

    // 로딩이 100%에 도달하지 않으면 계속 호출
    if (currentPercent < 100) {
      requestAnimationFrame(updateLoading);
    }
  }

  // 이징 함수 (느리게 시작해서 빠르게 끝남)
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(updateLoading);
});
