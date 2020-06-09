import './header';
import "@babel/polyfill";
import '../css/global.css';
import '../css/slideShow.css';
import '../css/index.css';
import '../css/aside.css';
import gogleNewAPI from './services/gogleNewAPI';
import renderNews from './util/renderNews';
import treatCategory from './util/treatCategory';

let articlesDataBase = [];
let articles;
let slideIndex = 1;
let dataSearch = {};
const main = document.querySelector('main');

eventsIndex();

function eventsIndex() {
    const category = document.querySelectorAll('#navBar p');
    for (let index = 0; index < category.length; index++) {
        category[index].addEventListener('click', categoryClicked);
    }

    const slideShow = document.querySelector('#slideShow');
    slideShow.addEventListener('click', newsClicked, true);

    const dots = document.querySelectorAll(".dot");
    for (let index = 0; index < dots.length; index++) {
        dots[index].onclick = () => currentSlide(index + 1);
    }

    window.onload = async () => {
        slideShow.style.visibility = 'hidden';
        await extractSearchURL('');
        if ((dataSearch.category == undefined) && (dataSearch.topic == undefined)) {
            await searchArticles();
        } else if (dataSearch.category != undefined) {
            await searchArticles('', dataSearch.category);
        } else {
            await searchArticles(dataSearch.topic);
        }

        if (articlesDataBase.length == 0) {
            searchNotFound();
            return;
        }
        slideShow.style.visibility = 'visible';
        showSlides(1);
        setInterval(plusSlides, 6000);
    }
}

function extractSearchURL() {
    const partes = location.search.slice(1).split('&');
    const chaveValor = partes[0].split('=');
    const chave = chaveValor[0];
    const valor = chaveValor[1];
    dataSearch[chave] = valor;
}

function plusSlides(n = 1) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const numSlides = 3;

    const slideShow = document.querySelector('#slideShow');
    slideShow.setAttribute('keyArticle', slideIndex - 1);

    const slideTitle = document.querySelector('#slideShow h1');
    const slideDescription = document.querySelector('#slideShow p');
    const dots = document.querySelectorAll(".dot");

    if (n > numSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = numSlides }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideTitle.innerHTML = articlesDataBase[slideIndex - 1].title;
    slideDescription.innerHTML = articlesDataBase[slideIndex - 1].description;
    slideShow.setAttribute('style', "background: url(" + articlesDataBase[slideIndex - 1].urlToImage + ") center top / cover no-repeat");
    dots[slideIndex - 1].className += " active";
}
//

async function searchArticles(topic = '', category = '', page = 1) {
    main.innerHTML = '';

    articles = await gogleNewAPI(topic, category, page);

    for (const key in articles) {
        const { title, description, content, publishedAt, url, urlToImage } = articles[key];
        articlesDataBase.push({
            title,
            description,
            content,
            publishedAt,
            url,
            urlToImage
        });
        if (key >= 3) renderNews(key, title, description, urlToImage, publishedAt, newsClicked);
    }
}

function newsClicked() {
    try {
        // when clicked on the slide image, the path is 1 and, when the title is clicked, the path is 2. 
        // The algorithm tries to follow path 1, if it goes wrong, 2 will work.
        newsClickedAction(2);

    } catch (err) {
        newsClickedAction();
    }
}

function newsClickedAction(path = 1) {
    const article = articlesDataBase[event.path[path].getAttribute('keyarticle')];
    sessionStorage.setItem('article', JSON.stringify(article));

    let title = article.title;
    sessionStorage.setItem('title', title);
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    location.assign(`news.html?title=${title}`);
}

async function categoryClicked(event) {
    window.scrollTo(0, 0);

    let category = event.path[0].innerHTML;
    category = treatCategory(category);

    window.location = `index.html?category=${category}`;

    articlesDataBase = [];
    dataSearch = {};

    await extractSearchURL('');

    searchArticles('', dataSearch.category);
}

function searchNotFound() {
    const elem = document.createElement('div');
    elem.setAttribute('id', 'notFound');
    const textElem = document.createElement('h1');
    textElem.innerHTML = "404 - Busca não encontrada <br>:(";
    elem.appendChild(textElem);
    main.appendChild(elem);
    setInterval(() => {
        window.location = '/';
    }, 3000);
}



