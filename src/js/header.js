import '../css/header.css';

function eventsHeader() {
    let menu = document.querySelector('#menu');

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
