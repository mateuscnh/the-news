import './header';
import "@babel/polyfill";
import '../css/global.css';
import '../css/index.css';
import api from './api';

let articlesDataBase = [];
let articles;
const main = document.querySelector('main');

eventsIndex();

function eventsIndex() {
    let category = document.querySelectorAll('#navBar p');
    for (let index = 0; index < category.length; index++) {
        category[index].addEventListener('click', categoryClicked);
    }

    window.pageshow = searchArticles();
}

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
        renderNews(key, title, description, urlToImage, publishedAt);
    }
}
//"keyArticle" is the position  of the article in the "articlesDatabase"
function renderNews(keyArticle, title, description, urlToImage, publishedAt) {
    let postWrapEl = document.createElement('div');
    postWrapEl.setAttribute('class', 'postWrap');
    postWrapEl.setAttribute('keyArticle', keyArticle);

    let imgEl = createSingleElement('div', 'id', 'imgPost');
    imgEl.setAttribute('style', "background: url(" + urlToImage + ") center center / contain no-repeat");
    imgEl.addEventListener('click', newsClicked);
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
    location.assign(`news.html?title=${article.title}`);
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
    searchArticles('', category);
}



