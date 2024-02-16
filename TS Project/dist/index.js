"use strict";
const getUsername = document.querySelector('#user');
const formSubmit = document.querySelector('#form');
const main_container = document.querySelector('.main_container');
// Reusable function
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`No Internet - status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    return data;
}
// Displaying card UI(profile icon, github link..)
const showResultUI = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    main_container.insertAdjacentHTML('beforeend', `<div class="card">
    <img src=${avatar_url} alt=${login}/>
    <hr/>
    <div class="card-footer">
    <img src="${avatar_url}" alt="${login}"/>
    <a href="${url}"> Github </a>
    </div>
    </div>
    `);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
            console.log("Log-in " + singleUser.login);
        }
    });
}
// Default function call
fetchUserData("https://api.github.com/users");
// Search functionality feature
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getUsername.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await myCustomFetcher(url, {});
        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });
        main_container.innerHTML = "";
        if (matchingUsers.length === 0) {
            main_container?.insertAdjacentHTML("beforeend", `<p class="empty-msg">No match found.</p>`);
        }
        else {
            for (const singleUser of matchingUsers) {
                showResultUI(singleUser);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
});
