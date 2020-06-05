function eventsHeader() {
    alert('123')
    let menu = document.getElementById('menu');
    let navBar = document.getElementById('navbar');
    menu.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        navBar.style.visibility = 'visible';
    });

    navBar.addEventListener('click', () => {
        navBar.style.visibility = 'hidden';
        document.body.style.overflow = 'visible';
    });

    let inputSearch = document.getElementById('inputSearch');

    inputSearch.addEventListener('focus', () => {
        let search = document.getElementById('search');
        search.style.width = '230px';
    })

    inputSearch.addEventListener('blur', () => {
        let search = document.getElementById('search');
        search.style.width = '130px';
    })
}

export default eventsHeader;
