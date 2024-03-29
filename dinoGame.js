const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const dinoImage = new Image();
dinoImage.src = 'dino.png';
dinoImage.onload = () => {
    ctx.drawImage(dinoImage,0,320);
};
