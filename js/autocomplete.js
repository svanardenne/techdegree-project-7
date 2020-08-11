const searchbar = document.getElementById('userField');
const userList = document.querySelector('.user-list');
const listItem = userList.children;
const users = [
    "Victoria Chambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver"
];

//Creates a list
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let list = document.createElement('LI');
    list.textContent = user;
    userList.appendChild(list);
    let listItem = userList.children[i];
    listItem.className = "hidden";
    console.log(listItem);
}

    //compares input to array
searchbar.addEventListener('keyup', () => {
    for (let i = 0; i < users.length; i++) {
        let user = users[i].toLowerCase();
        if (user.includes(searchbar.value.toLowerCase()) && searchbar.value !== "") {
            listItem[i].className = '';
        } else {
            listItem[i].className = 'hidden';
        }
    }
});


//Allows the user to click on one of the entries to add it to the searchbar value
userList.addEventListener('click', (e) => {
    let click = e.target.textContent;
    for (let i = 0; i < users.length; i++) {
        if (searchbar.value !== users[i]) {
            searchbar.value = click;
            userList.className = 'hidden';
        }
    }
});

// Create JS code to check the value of the searchbar, 
// compare it to the values in the array, 
// then append only those matching to the list div

// Then figure out a way to allow it so that clicking on an entry 
// in the drop down menu places that name into the searchbar.