import '../css/header.css';

function eventsHeader() {
    let menu = document.querySelector('#menu');

    let navBar = document.querySelector('#navbar');
    menu.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        navBar.style.visibility = 'visible';
    });

    navBar.addEventListener('click', () => {
        navBar.style.visibility = 'hidden';
        document.body.style.overflow = 'visible';
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

export default eventsHeader;
