import eventsHeader from './header.js';
import '../css/global.css';
import '../css/index.css';
eventsHeader();

let newsWrap = document.getElementsByClassName('newsWrap');

for (let index = 0; index < newsWrap.length; index++) {
    newsWrap[index].addEventListener('mouseenter', () => {
        newsWrap[index].style.backgroundSize = '120%';
    })
    newsWrap[index].addEventListener('mouseleave', () => {
        newsWrap[index].style.backgroundSize = '115%';
    })
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

renderNews('./assets/news1.jpg', 'EUA devem impedir entrada de brasileiros, diz conselheiro de Trump', "Esperamos que seja temporária', afirmou Robert O'Brien a canal de TV americano.", 'Há 50 minutos - Em mundo');
renderNews('./assets/news2.jpg', 'Toffoli é internado, passa por cirurgia e apresenta sintomas de Covid-19', "Presidente do STF passou por drenagem de abscesso e respira sem aparelhos, segundo nota do Supremo.", 'Há 50 minutos - Em mundo');
renderNews('./assets/news3.jpg', 'Secretário de vigilância do Ministério da Saúde anuncia que deixa cargo amanhã', "Wanderson de Oliveira defende o isolamento social. Ministério não anunciou sucessor.", 'Há 50 minutos - Em mundo');
