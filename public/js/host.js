const socket = io();

const roomCodeElement = document.getElementById('roomCode');
const playerCountElement = document.getElementById('playerCount');
const qrcodeContainer = document.getElementById('qrcode');

// Oda oluşturma isteği gönder
socket.emit('createRoom');

socket.on('roomCreated', (data) => {
    roomCodeElement.innerText = data.roomCode;
    
    // QR Kod Temizle ve Yeni Oluştur
    qrcodeContainer.innerHTML = "";
    
    // Bağlantı URL'i (Oda kodunu parametre olarak ekler)
    const controllerUrl = `http://${window.location.hostname}:3000/controller.html?room=${data.roomCode}`;
    
    new QRCode(qrcodeContainer, {
        text: controllerUrl,
        width: 128,
        height: 128
    });
});

socket.on('playerCount', (data) => {
    playerCountElement.innerText = data.playerCount;
});