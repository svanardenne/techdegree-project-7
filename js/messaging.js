/* ============================================= */
/*              Messaging                        */
/* ============================================= */

const form = document.querySelector('.message-container');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

//Creates alerts to inform the user fields need to be filled out
form.addEventListener('submit', (e) => {
    event.preventDefault();
    if (user.value === "" && message.value === "") {
        alert("All fields must be filled out");
    } else if (user.value === "") {
        alert("The user field must be filled out");
    } else if (message.value === "") {
        alert("The message field must be filled out");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        user.value = "";
        message.value = "";
    }
});