let text = document.getElementById('text');
let bg = document.getElementById('bg');
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
window.addEventListener('scroll', () => {
let value = window.scrollY;
    bg2.style.left = value * -2.5 + 'px';
    bg1.style.top = value * -1.5 + 'px';
    bg3.style.top = value * -3.5 + 'px';
    text.style.top  + value * 0.5 + '%';
});
