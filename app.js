const keys = document.querySelectorAll('.key');
document.addEventListener('keydown', (e) => {
    const tugma = e.key
    const audio = document.querySelector(`audio[data-key="${tugma}"]`);
    const key = document.querySelector(`.key[data-key="${tugma}"]`);
    if (!key) return;
    key.classList.add('show')
    audio.play()
    audio.currentTime = 0
})
function removeTransiton(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("show");

    setTimeout(() => {
        this.classList.remove("show");
    }, 500);
}
keys.forEach(key => key.addEventListener("transitionend", removeTransiton));