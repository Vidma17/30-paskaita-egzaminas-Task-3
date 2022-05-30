/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let showUsersButton = document.getElementById('btn')
showUsersButton.addEventListener('click', getDataFromApi)

function getDataFromApi() {
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((createCards) => {
        createCards.forEach((users) => {
            let login = users.login;
            let avatar = users.avatar_url;
            let img = document.createElement('img');
            img.classList.add('image');
            img.src = avatar;
            let listLogin = document.createElement('div');
            listLogin.classList.add('login');
            listLogin.innerHTML = login;
            
            document.getElementById('output').append(listLogin);
            document.getElementById('output').append(img);
        })
    });
    document.getElementById('message').style.visibility = 'hidden';
}