import './header';
import "@babel/polyfill";
import '../css/global.css';
import '../css/slideShow.css';
import '../css/index.css';
import api from './api';

let articlesDataBase = [];
let articles;
const main = document.querySelector('main');
let slideIndex = 1;

eventsIndex();

function eventsIndex() {
    let category = document.querySelectorAll('#navBar p');
    for (let index = 0; index < category.length; index++) {
        category[index].addEventListener('click', categoryClicked);
    }

    // Slide Show
    document.querySelector('#prev').onclick = () => plusSlides(-1);
    document.querySelector('#next').onclick = () => plusSlides(1);
    document.querySelector('#slideShow').addEventListener('click', newsClicked, true);

    let dots = document.querySelectorAll(".dot");
    for (let index = 0; index < dots.length; index++) {
        dots[index].onclick = () => { currentSlide(index + 1); }
    }

    window.onpageshow = async () => {
        await searchArticles();
        showSlides(1);
        setInterval(plusSlides, 4000);
    }
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
    slideShow.setAttribute('keyArticle', 0);
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
    articles = await api(topic, category, page);

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
        if (key >= 3) renderNews(key, title, description, urlToImage, publishedAt);
    }
}
//"keyArticle" is the position  of the article in the "articlesDatabase"
function renderNews(keyArticle, title, description, urlToImage, publishedAt) {
    let postWrapEl = document.createElement('div');
    postWrapEl.setAttribute('class', 'postWrap');
    postWrapEl.setAttribute('keyArticle', keyArticle);

    let imgEl = createSingleElement('div', 'id', 'imgPost');
    imgEl.setAttribute('style', "background: url(" + urlToImage + ") center center / contain no-repeat");
    postWrapEl.appendChild(imgEl);

    let textPostEl = createSingleElement('div', 'id', 'textPost');

    let titleEl = document.createElement('h1');
    titleEl.addEventListener('click', newsClicked);
    titleEl.innerHTML = title;

    let descriptionEl = document.createElement('p');
    descriptionEl.innerHTML = description;

    let timeEl = createSingleElement('p', 'id', 'time');
    timeEl.innerHTML = publishedAt;

    textPostEl.appendChild(titleEl);
    textPostEl.appendChild(descriptionEl);
    textPostEl.appendChild(timeEl);

    postWrapEl.appendChild(textPostEl);
    main.appendChild(postWrapEl);
}

function createSingleElement(tagName, attribute, nameAttribute) {
    let elem = document.createElement(tagName);
    if ((attribute == '') && (nameAttribute === '')) return elem;
    elem.setAttribute(attribute, nameAttribute);
    return elem;
}

function newsClicked(event) {
    let article = articlesDataBase[event.path[2].getAttribute('keyarticle')];
    sessionStorage.setItem('article', JSON.stringify(article));
    let title = article.title;
    sessionStorage.setItem('title', title);
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    location.assign(`news.html?title=${title}`);
}

function categoryClicked(event) {
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
    articlesDataBase = [];
    searchArticles('', category);
}



