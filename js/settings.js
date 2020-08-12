/* ============================================= */
/*              Settings                         */
/* ============================================= */

const saveButton = document.querySelector('.settings-button');

//Sets up the initial localStorage settings when loading page
let checkStatus = JSON.parse(localStorage.getItem("checkbox-one"));
    document.querySelector(".checkbox-one").checked = checkStatus;
    checkStatus = JSON.parse(localStorage.getItem("checkbox-two"));
    document.querySelector(".checkbox-two").checked = checkStatus;
if (localStorage.getItem("timezone")) {
    let timezone = localStorage.getItem("timezone");
    document.querySelector("#timezone").value = timezone;
}

//Saves settings to localStorage
function save() {	
	let checkbox1 = document.querySelector(".checkbox-one");
    localStorage.setItem("checkbox-one", checkbox1.checked);	
    let checkbox2 = document.querySelector(".checkbox-two");
    localStorage.setItem("checkbox-two", checkbox2.checked);	
    let select = document.querySelector('#timezone');
    localStorage.setItem("timezone", select.value);

}

//Removes loacalStorage settings
function removeLocal() {	
    let timezone = localStorage.getItem("timezone");
    document.querySelector("#timezone").value = '';
	let checkbox1 = document.querySelector(".checkbox-one");
    localStorage.setItem("checkbox-one", checkbox1.checked = false);
    let checkbox2 = document.querySelector(".checkbox-two");
    localStorage.setItem("checkbox-two", checkbox2.checked = false);
}

//Runs save function on click for both the save and cancel buttons
saveButton.addEventListener('click', (e) => {
    if (e.target.className === 'button-primary') {
        save();
    } else if (e.target.className === 'button-disabled') {
        removeLocal();
        localStorage.clear();
    }
});

