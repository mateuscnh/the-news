import '../css/header.css';

function eventsHeader() {
    let menu = document.querySelector('#menu');

    let cont = 0;
    menu.addEventListener('click', () => {
        let navBarEl = document.querySelector('#navBar');
        if ((cont % 2) == 0) {
            navBarEl.classList.remove('navBarToggle');
            navBarEl.classList.add('navBarToggle2');
        } else {
            navBarEl.classList.remove('navBarToggle2');
            navBarEl.classList.add('navBarToggle');
        }
        cont++;
    });

    let inputSearch = document.querySelector('#inputSearch');
    let search = document.querySelector('#search');

    inputSearch.addEventListener('focus', () => {
        search.style.width = '230px';
    }, true)

    inputSearch.addEventListener('blur', () => {
        search.style.width = '130px';
    }, true)
}

export default eventsHeader();
