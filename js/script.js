// Функция для открытия модального окна по его идентификатору
function openModal(modalId) {
    document.getElementById(modalId).classList.add("open");
}

// Функция для закрытия модального окна по его идентификатору
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("open");
}

// Добавление обработчиков событий для открытия модальных окон
document.getElementById("open-modal-link").addEventListener("click", function() {
    openModal("my-modal");
});
document.getElementById("open-modal-link2").addEventListener("click", function() {
    openModal("my-modal2");
});
document.getElementById("open-modal-link3").addEventListener("click", function() {
    openModal("my-modal3");
});

// Добавление обработчиков событий для закрытия модальных окон
document.getElementById("close-my-module-btn").addEventListener("click", function() {
    closeModal("my-modal");
});
document.getElementById("close-my-module-btn2").addEventListener("click", function() {
    closeModal("my-modal2");
});
document.getElementById("close-my-module-btn3").addEventListener("click", function() {
    closeModal("my-modal3");
});

// Закрытие модального окна при нажатии на клавишу Esc
window.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        document.querySelectorAll('.modal.open').forEach(function(modal) {
            modal.classList.remove('open');
        });
    }
});

// Закрытие модального окна при клике вне его
document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(event) {
        if (!event.target.closest('.modal-box')) {
            modal.classList.remove('open');
        }
    });
});
