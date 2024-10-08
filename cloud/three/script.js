const imageUrls = [
    "../three/images/4.jpg",
    "../three/images/5.jpg",
    "../three/images/6.jpg",
    "../three/images/7.jpg",
    "../three/images/8.jpg",
];

// gallery 요소 선택
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const drawButton = document.getElementById('draw-button');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 이미지 URL 배열을 반복하면서 갤러리에 이미지 추가
imageUrls.forEach((url, index) => {
    // 이미지 컨테이너 div 생성
    const imageDiv = document.createElement('div');
    imageDiv.className = 'image';

    // img 태그 생성 및 src 설정
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Gallery Image ${index + 1}`;

    // 이미지 클릭 이벤트 추가
    img.addEventListener('click', () => {
        overlayImage.src = url;
        overlay.style.display = 'flex';
        canvas.width = overlayImage.width;
        canvas.height = overlayImage.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // 이미지 컨테이너에 img 태그 추가
    imageDiv.appendChild(img);

    // gallery에 이미지 컨테이너 추가
    gallery.appendChild(imageDiv);
});

// 오버레이 클릭 시 닫기
overlay.addEventListener('click', (e) => {
    if (e.target !== overlayImage && e.target !== drawButton) {
        overlay.style.display = 'none';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

// 그림 그리기 기능
let drawing = false;

drawButton.addEventListener('click', () => {
    canvas.style.pointerEvents = 'auto';
});

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
});