import './header.js';
import '../css/global.css';
import '../css/index.css';
import api from './api.js';


async function index() {
    let articles
    eventsIndex();
    let data = await api('bolsonaro');
    //console.log(data[0])
    for (const key in data) {
        const { title, description, publishedAt, urlToImage } = data[key];
        renderNews(urlToImage, title, description, publishedAt);
    }

    function eventsIndex() {
        let newsWrap = document.getElementsByClassName('newsWrap');

        for (let index = 0; index < newsWrap.length; index++) {
            newsWrap[index].addEventListener('mouseenter', () => {
                newsWrap[index].style.backgroundSize = '120%';
            })
            newsWrap[index].addEventListener('mouseleave', () => {
                newsWrap[index].style.backgroundSize = '115%';
            })
        }
    }

    function renderNews(imagePath, textH1, textP, textTime) {
        const main = document.getElementById('main');
        let postWrap = document.createElement('div');
        postWrap.setAttribute('class', 'postWrap');

        let imgPost = createSingleElement('div', 'id', 'imgPost');
        imgPost.setAttribute('style', "background: url(" + imagePath + ") center center / contain no-repeat");
        imgPost.addEventListener('click', newsClicked);
        postWrap.appendChild(imgPost);

        let textPost = createSingleElement('div', 'id', 'textPost');

        let title = document.createElement('h1');
        title.addEventListener('click', newsClicked);
        title.innerHTML = textH1;

        let abstract = document.createElement('p');
        abstract.innerHTML = textP;

        let time = createSingleElement('p', 'id', 'time');
        time.innerHTML = textTime;

        textPost.appendChild(title);
        textPost.appendChild(abstract);
        textPost.appendChild(time);

        postWrap.appendChild(textPost);
        main.appendChild(postWrap);
    }

    function createSingleElement(tagName, atribute, nameAtribute) {
        let elem = document.createElement(tagName);
        elem.setAttribute(atribute, nameAtribute);
        return elem;
    }

    function newsClicked(event) {
        window.location.assign("news.html");
    }
}

index();

