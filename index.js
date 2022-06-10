//Evento KeyDown: Pulsar una tecla
function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if(audio == null)return;
    audio.currentTime = 0;
    audio.play();
    key.classList('playing');
}
window.addEventListener('keydown', playsound);