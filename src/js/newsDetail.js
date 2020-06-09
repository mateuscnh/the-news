import './header';
import '../css/global.css';
import '../css/newsDetail.css';

let article = JSON.parse(sessionStorage.getItem('article'));

renderNewsDetail();

function renderNewsDetail() {
    let category = document.querySelectorAll('#navBar p');
    for (let index = 0; index < category.length; index++) {
        category[index].addEventListener('click', categoryClicked);
    }

    window.onload = () => {
        document.title = 'G1 - ' + sessionStorage.getItem('title');
    };

    let mainEl = document.querySelector('main');

    let containerEl = createSingleElement('div', 'id', 'container');

    let contentHeadEl = createSingleElement('div', 'class', 'content-head');
    let titleEl = createSingleElement('h1', '', '');
    titleEl.innerHTML = article.title;
    contentHeadEl.appendChild(titleEl);
    let descriptionEl = createSingleElement('p', '', '');
    descriptionEl.innerHTML = article.description;
    contentHeadEl.appendChild(descriptionEl);
    let publishedAtEl = createSingleElement('p', '', '');
    publishedAtEl.innerHTML = article.publishedAt;
    contentHeadEl.appendChild(publishedAtEl);

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
    window.location = `index.html?category=${category}`;
}




