const notification = document.querySelector('.notification');
const bell = document.querySelector('.bell');
const notifications = document.querySelector('.notifications');

bell.addEventListener('click', (e) => {
    if (notifications.style.display = "none") {
        notifications.style.display = "inline-block";
    } else {
        notifications.style.display = "none";
    }
});
