const socket = io();

// URL'den oda kodunu al (?room=8616 kısmı)
const urlParams = new URLSearchParams(window.location.search);
const roomParam = urlParams.get('room');

if (roomParam) {
    // QR taranıp gelindiyse direkt odaya katıl
    socket.emit('joinRoom', roomParam);
}

socket.on('joinError', (msg) => {
    alert(msg);
});