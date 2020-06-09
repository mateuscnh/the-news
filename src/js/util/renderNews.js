//"keyArticle" is the position  of the article in the "articlesDatabase"
function renderNews(keyArticle, title, description, urlToImage, publishedAt, newsClicked) {
    const main = document.querySelector('main');
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

    let timeEl = createSingleElement('p', 'id', 'date');
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

export default renderNews;
