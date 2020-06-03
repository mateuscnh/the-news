let newsWrap = document.getElementsByClassName('newsWrap');

for (let index = 0; index < newsWrap.length; index++) {
    newsWrap[index].addEventListener('mouseenter', () => {
        newsWrap[index].style.backgroundSize = '120%';
    })
    newsWrap[index].addEventListener('mouseleave', () => {
        newsWrap[index].style.backgroundSize = '115%';
    })
}

let inputSearch = document.getElementById('inputSearch');

inputSearch.addEventListener('focus', () => {
    let search = document.getElementById('search');
    search.style.width = '230px';
})

inputSearch.addEventListener('blur', () => {
    let search = document.getElementById('search');
    search.style.width = '130px';
})

let imgPost = document.querySelectorAll('#imgPost');
imgPost[0].style.background = "url('images/news1.jpg') no-repeat center";
imgPost[0].style.backgroundSize = 'contain';
imgPost[1].style.background = "url('images/news2.jpg') no-repeat center";
imgPost[1].style.backgroundSize = 'contain';
imgPost[2].style.background = "url('images/news3.jpg') no-repeat center";
imgPost[2].style.backgroundSize = 'contain';

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