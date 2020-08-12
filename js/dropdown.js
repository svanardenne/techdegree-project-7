/* ============================================= */
/*              Dropdown                         */
/* ============================================= */

const notification = document.querySelector('.notification');
const bell = document.querySelector('.bell');
const notifications = document.querySelector('.notifications');

//Displays the notifications dropsdown when clicking on the bell icon
bell.addEventListener('click', (e) => {
    if (notifications.style.display === "inline-block") {
        notifications.style.display = "none";
    } else {
        notifications.style.display = "inline-block"
    }
});
