import './header';
import '../css/global.css';
import '../css/newsDetail.css';
import treatCategory from './util/treatCategory';

const article = JSON.parse(sessionStorage.getItem('article'));

renderNewsDetail();

function renderNewsDetail() {
    const category = document.querySelectorAll('#navBar p');
    for (let index = 0; index < category.length; index++) {
        category[index].addEventListener('click', categoryClicked);
    }

    window.onload = () => {
        document.title = 'theNews - ' + sessionStorage.getItem('title');
    };

    const mainEl = document.querySelector('main');

    const containerEl = createSingleElement('div', 'id', 'container');

    const contentHeadEl = createSingleElement('div', 'class', 'content-head');
    const titleEl = createSingleElement('h1', '', '');
    titleEl.innerHTML = article.title;
    contentHeadEl.appendChild(titleEl);
    const descriptionEl = createSingleElement('p', '', '');
    descriptionEl.innerHTML = article.description;
    contentHeadEl.appendChild(descriptionEl);
    const publishedAtEl = createSingleElement('p', '', '');
    publishedAtEl.setAttribute('id', 'date');
    publishedAtEl.innerHTML = article.publishedAt;
    contentHeadEl.appendChild(publishedAtEl);

    const contentTextEl = createSingleElement('div', 'class', 'content-text');
    const imgEl = createSingleElement('img', 'src', article.urlToImage);
    contentTextEl.appendChild(imgEl);
    const contentEl = createSingleElement('p', '', '');
    contentEl.innerHTML = article.content;
    contentTextEl.appendChild(contentEl);
    const compconsteNews = createSingleElement('a', 'href', article.url);
    compconsteNews.setAttribute('target', '_blank');
    compconsteNews.innerHTML = '<p>LER MATÉRIA COMPLETA</p>';
    contentTextEl.appendChild(compconsteNews);

    containerEl.appendChild(contentHeadEl);
    containerEl.appendChild(contentTextEl);

    mainEl.appendChild(containerEl);
}

function createSingleElement(tagName, attribute, nameAttribute) {
    const elem = document.createElement(tagName);
    if ((attribute == '') && (nameAttribute === '')) return elem;
    elem.setAttribute(attribute, nameAttribute);
    return elem;
}

function categoryClicked(event) {
    window.scrollTo(0, 0);

    let category = event.path[0].innerHTML;
    category = treatCategory(category);

    window.location = `index.html?category=${category}`;
}




