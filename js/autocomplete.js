const searchbar = document.getElementById('userField');
const userList = document.querySelector('.user-list');
const listItems = userList.children;
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
}

//compares input to array
searchbar.addEventListener('keyup', () => {
    for (let i = 0; i < users.length; i++) {
        let user = users[i].toLowerCase();
        if (user.includes(searchbar.value.toLowerCase()) && searchbar.value !== "") {
            listItems[i].className = '';
        } else {
            listItems[i].className = 'hidden';
        }
    }
});


//Allows the user to click on one of the entries to add it to the searchbar value
userList.addEventListener('click', (e) => {
    let click = e.target.textContent;
    for (let i = 0; i < users.length; i++) {
        if (searchbar.value !== users[i]) {
            searchbar.value = click;
            let listItem = userList.children[i];
            listItem.className = "hidden"
        }
    }
});