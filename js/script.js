document.getElementById("open-modal-link").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open");
});

document.getElementById("close-my-module-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open");
});



document.getElementById("open-modal-link2").addEventListener("click", function(){
    document.getElementById("my-modal2").classList.add("open");
});

document.getElementById("close-my-module-btn2").addEventListener("click", function(){
    document.getElementById("my-modal2").classList.remove("open");
});



document.getElementById("open-modal-link3").addEventListener("click", function(){
    document.getElementById("my-modal3").classList.add("open");
});

document.getElementById("close-my-module-btn3").addEventListener("click", function(){
    document.getElementById("my-modal3").classList.remove("open");
});


// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal2").classList.remove("open")
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal3").classList.remove("open")
    }
});


// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});



document.querySelector("#my-modal2 .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


document.querySelector("#my-modal3 .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal3").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});