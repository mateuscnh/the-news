import '../css/header.css';

let menu = document.querySelector('#menu');

let cont = 0;
let navBarEl = document.querySelector('#navBar');
menu.addEventListener('click', () => {
    if ((cont % 2) == 0) {
        navBarEl.classList.remove('navBarToggle');
        navBarEl.classList.add('navBarToggle2');
    } else {
        navBarEl.classList.remove('navBarToggle2');
        navBarEl.classList.add('navBarToggle');
    }
    cont++;
});

navBarEl.onmouseleave = () => {
    navBarEl.classList.remove('navBarToggle2');
    navBarEl.classList.add('navBarToggle');
    cont++;
};

navBarEl.addEventListener('click', () => {
    navBarEl.classList.remove('navBarToggle2');
    navBarEl.classList.add('navBarToggle');
})

let inputSearch = document.querySelector('#inputSearch');
let search = document.querySelector('#search');

inputSearch.addEventListener('focus', () => {
    search.style.width = '230px';
}, true)

inputSearch.addEventListener('blur', () => {
    search.style.width = '130px';
}, true)

inputSearch.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        window.location = `index.html?topic=${inputSearch.value}`;
    }
})







