import './header';
import "@babel/polyfill";
import '../css/global.css';
import '../css/index.css';
import api from './api';


async function index() {
    let articlesDataBase = [];
    let articles = await api();
    searchArticles();

    function searchArticles() {
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
            if (key == 0) {

                renderTopNews('big', key, title, description, urlToImage);
                continue;
            }
            if (key == 1 || key == 2) {

                renderTopNews('little', key, title, description, urlToImage);
                continue;
            }

            renderNews(key, title, description, urlToImage, publishedAt);
        }
        eventsIndex();
    }

    function eventsIndex() {
        let contentNewsEl = document.getElementsByClassName('contentNews');

        for (let index = 0; index < contentNewsEl.length; index++) {
            contentNewsEl[index].addEventListener('mouseenter', () => {
                contentNewsEl[index].style.backgroundSize = '120%';
            })
            contentNewsEl[index].addEventListener('mouseleave', () => {
                contentNewsEl[index].style.backgroundSize = '115%';
            })
        }
    }
    //"bigOrLittle" control variable to inform which type of news to create
    //"keyArticle" is the position  of the article in the "articlesDatabase"
    function renderTopNews(bigOrLittle, keyArticle, title, description, urlToImage) {
        let topNewsEl = document.querySelector('#topNews');
        // BIG NEWS
        if (bigOrLittle === 'big') {
            let bigEl = document.querySelector('#big');
            bigEl.setAttribute('keyArticle', keyArticle);

            let contentBigNewsEl = createContentNews(keyArticle, title, description, '');
            bigEl.appendChild(contentBigNewsEl);
            topNewsEl.appendChild(bigEl);
            return;
        }
        // LITTLE NEWS
        let littleEl = document.querySelector('#little');

        let contentLittleNewsEl = createContentNews(keyArticle, title, description, urlToImage);

        littleEl.appendChild(contentLittleNewsEl);
        topNewsEl.appendChild(littleEl);
    }

    function createContentNews(keyArticle, title, description, urlToImage) {
        let contentNewsEl = createSingleElement('div', 'class', 'contentNews');
        contentNewsEl.addEventListener('click', newsClicked);

        let titleEl = createSingleElement('h1', '', '');
        titleEl.innerHTML = title;

        let descriptionEl = createSingleElement('p', '', '');
        descriptionEl.innerHTML = description;

        if (urlToImage != '') {
            contentNewsEl.style.background = "url(" + urlToImage + ") center center / 115% no-repeat";
            let blackOpacityEl = createSingleElement('div', 'class', 'blackOpacity');
            blackOpacityEl.appendChild(titleEl);
            blackOpacityEl.appendChild(descriptionEl);
            contentNewsEl.appendChild(blackOpacityEl);
            contentNewsEl.setAttribute('keyArticle', keyArticle);
            return contentNewsEl;
        }

        contentNewsEl.appendChild(titleEl);
        contentNewsEl.appendChild(descriptionEl);

        return contentNewsEl;
    }

    //"keyArticle" is the position  of the article in the "articlesDatabase"
    function renderNews(keyArticle, title, description, urlToImage, publishedAt) {
        const main = document.querySelector('main');
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
}

index();

