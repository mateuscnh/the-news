import './header';
import "@babel/polyfill";
import '../css/global.css';
import '../css/slideShow.css';
import '../css/index.css';
import gogleNewAPI from './services/gogleNewAPI';
import renderNews from './util/renderNews';

let articlesDataBase = [];
let articles;
const main = document.querySelector('main');
let slideIndex = 1;
let dataSearch = {};

eventsIndex();

function eventsIndex() {
    let category = document.querySelectorAll('#navBar p');
    for (let index = 0; index < category.length; index++) {
        category[index].addEventListener('click', categoryClicked);
    }

    document.querySelector('#slideShow').addEventListener('click', newsClicked, true);

    let dots = document.querySelectorAll(".dot");
    for (let index = 0; index < dots.length; index++) {
        dots[index].onclick = () => { currentSlide(index + 1); }
    }

    window.onload = async () => {
        await extractSearchURL('');
        if ((dataSearch.category == undefined) && (dataSearch.topic == undefined)) {
            await searchArticles();
        } else if (dataSearch.category != undefined) {
            await searchArticles('', dataSearch.category);
        } else {
            await searchArticles(dataSearch.topic);
        }
        showSlides(1);
        setInterval(plusSlides, 6000);
    }
}

function extractSearchURL() {
    let partes = location.search.slice(1).split('&');
    let chaveValor = partes[0].split('=');
    let chave = chaveValor[0];
    let valor = chaveValor[1];
    dataSearch[chave] = valor;
}

function plusSlides(n = 1) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let numSlides = 3;
    let slideShow = document.querySelector('#slideShow');
    let slideTitle = document.querySelector('#slideShow h1');
    slideShow.setAttribute('keyArticle', slideIndex - 1);
    let slideDescription = document.querySelector('#slideShow p');
    let dots = document.querySelectorAll(".dot");

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

function newsClicked(event) {
    try {
        let article = articlesDataBase[event.path[2].getAttribute('keyarticle')];
        sessionStorage.setItem('article', JSON.stringify(article));
        let title = article.title;
        sessionStorage.setItem('title', title);
        title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        location.assign(`news.html?title=${title}`);
    } catch (err) {
        topNewsClicked(event);
    }
}
function topNewsClicked(event) {
    let article = articlesDataBase[event.path[1].getAttribute('keyarticle')];
    sessionStorage.setItem('article', JSON.stringify(article));
    let title = article.title;
    sessionStorage.setItem('title', title);
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    location.assign(`news.html?title=${title}`);
}

async function categoryClicked(event) {
    window.scrollTo(0, 0);
    let category = event.path[0].innerHTML;

    switch (category) {
        case 'NEGÓCIOS':
            category = 'business';
            break;
        case 'ENTRETENIMENTO':
            category = 'entertainment';
            break;
        case 'SAÚDE':
            category = 'health';
            break;
        case 'CIÊNCIAS':
            category = 'science';
            break;
        case 'ESPORTES':
            category = 'sports';
            break;
        case 'TECNOLOGIA':
            category = 'technology';
            break;
        default:
            category = '';
    }
    window.location = `index.html?category=${category}`;
    articlesDataBase = [];
    dataSearch = {};
    await extractSearchURL('');
    searchArticles('', dataSearch.category);
}



