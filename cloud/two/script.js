// 페이지 로드 시 카메라 시작
window.addEventListener('load', function () {
    const video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.srcObject = stream;
        }).catch(function (error) {
            console.log("Error: Cannot access camera");
        });
    }
});

// Capture 버튼 클릭 시 이벤트
document.getElementById('capture').addEventListener('click', function () {
    // 사진 찍기 전 2초 딜레이
    setTimeout(function () {
        takePicture();

        // "Capture" 버튼 숨기기 및 "Retake", "Save" 버튼 표시
        document.getElementById('capture').style.display = 'none';
        document.getElementById('retakeButton').style.display = 'block';
        document.getElementById('saveButton').style.display = 'block';
    }, 2000); // 2000 밀리초 = 2초 딜레이
});

// Retake 버튼 클릭 시 이벤트
document.getElementById('retakeButton').addEventListener('click', resetCamera);

// Save 버튼 클릭 시 이벤트 (Retake 버튼과 같은 기능)
document.getElementById('saveButton').addEventListener('click', resetCamera);

// 카메라 리셋 함수
function resetCamera() {
    const video = document.getElementById('video');
    const photo = document.getElementById('photo');
    const capturedImageContainer = document.getElementById('capturedImageContainer');
    
    photo.src = ''; // 이전 사진 제거
    capturedImageContainer.style.display = 'none'; // 이전 사진 숨기기

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.srcObject = stream;
            video.play();

            document.getElementById('photoBooth').style.display = 'flex'; // 포토부스 다시 표시
            document.getElementById('capture').style.display = 'block'; // "Capture" 버튼 다시 표시
            document.getElementById('retakeButton').style.display = 'none'; // "Retake" 버튼 숨기기
            document.getElementById('saveButton').style.display = 'none'; // "Save" 버튼 숨기기
        }).catch(function (error) {
            console.log("Error: Cannot access camera");
        });
    }
}

// 사진 찍기 함수
function takePicture() {
    const video = document.getElementById('video');
    const photo = document.getElementById('photo');
    const capturedImageContainer = document.getElementById('capturedImageContainer');

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    photo.src = canvas.toDataURL('image/png'); // 캡처된 이미지를 img 요소에 표시
    capturedImageContainer.style.display = 'block'; // 캡처된 이미지 컨테이너 표시
    document.getElementById('photoBooth').style.display = 'none'; // 사진 찍은 후 포토부스 숨김

    // 플래시 효과
    const flash = document.createElement('div');
    flash.className = 'flash';
    document.body.appendChild(flash);
    flash.style.display = 'block';
    setTimeout(() => {
        flash.style.display = 'none';
        document.body.removeChild(flash);
    }, 50);

    // 카메라 스트림 정지
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
}

// Save 버튼 클릭 시 다른 페이지로 이동
document.getElementById('saveButton').addEventListener('click', function () {
    // 원하는 페이지 URL로 변경
    window.location.href = "../three/index.html"; // 이동할 URL로 변경하세요
});


// 카운트다운 시작 함수
function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = "0:00";
        }
    }, 1000);
}


// 카운트다운 시작 (2분)
startCountdown(120);
