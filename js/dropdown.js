const notification = document.querySelector('.notification');
const bell = document.querySelector('.bell');
const notifications = document.querySelector('.notifications');

bell.addEventListener('click', (e) => {
    if (notifications.style.display === "inline-block") {
        notifications.style.display = "none";
    } else {
        notifications.style.display = "inline-block"
    }
});
