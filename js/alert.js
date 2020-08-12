/* ============================================= */
/*              Alert                            */
/* ============================================= */

const alertBanner = document.getElementById('alert');

//Sets up the Alert bar on page load
alertBanner.innerHTML = 
    `<div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
        to complete</p>
    <p class="alert-banner-close">x</p>
    </div>
    `
//Kills the alert bar on click
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.opacity = "0";
    }
});