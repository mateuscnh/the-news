import './header';
import '../css/global.css';
import '../css/newsDetail.css';

let article = JSON.parse(sessionStorage.getItem('article'));
renderNewsDetail();

function renderNewsDetail() {

    let mainEl = document.querySelector('main');

    let containerEl = createSingleElement('div', 'id', 'container');

    let contentHeadEl = createSingleElement('div', 'class', 'content-head');
    let titleEl = createSingleElement('h1', '', '');
    titleEl.innerHTML = article.title;
    contentHeadEl.appendChild(titleEl);
    let descriptionEl = createSingleElement('p', '', '');
    descriptionEl.innerHTML = article.description;
    contentHeadEl.appendChild(descriptionEl);

    let contentTextEl = createSingleElement('div', 'class', 'content-text');
    let imgEl = createSingleElement('img', 'src', article.urlToImage);
    contentTextEl.appendChild(imgEl);
    let contentEl = createSingleElement('p', '', '');
    contentEl.innerHTML = article.content;
    contentTextEl.appendChild(contentEl);
    let completeNews = createSingleElement('a', 'href', article.url);
    completeNews.setAttribute('target', '_blank');
    completeNews.innerHTML = '<p>LER MATÉRIA COMPLETA</p>';
    contentTextEl.appendChild(completeNews);

    containerEl.appendChild(contentHeadEl);
    containerEl.appendChild(contentTextEl);

    mainEl.appendChild(containerEl);

}

function createSingleElement(tagName, attribute, nameAttribute) {
    let elem = document.createElement(tagName);
    if ((attribute == '') && (nameAttribute === '')) return elem;
    elem.setAttribute(attribute, nameAttribute);
    return elem;
}



