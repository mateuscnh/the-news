import eventsHeader from './header.js';
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

function createNews(imagePath, textH1, textP, textTime) {
    const main = document.getElementById('main');
    let postWrap = document.createElement('div');
    postWrap.setAttribute('class', 'postWrap');

    let imgPost = document.createElement('div');
    imgPost.setAttribute('id', 'imgPost');
    imgPost.setAttribute('style', "background: url(" + imagePath + ") center center / contain no-repeat");
    imgPost.addEventListener('click', newsClicked);
    postWrap.appendChild(imgPost);

    let textPost = document.createElement('div');
    textPost.setAttribute('id', 'textPost');

    let title = document.createElement('h1');
    title.addEventListener('click', newsClicked);
    title.innerHTML = textH1;

    let abstract = document.createElement('p');
    abstract.innerHTML = textP;

    let time = document.createElement('p');
    time.setAttribute('id', 'time');
    time.innerHTML = textTime;

    textPost.appendChild(title);
    textPost.appendChild(abstract);
    textPost.appendChild(time);

    postWrap.appendChild(textPost);
    main.appendChild(postWrap);
}

function newsClicked(event) {
    console.log(event.path[1].children[0].innerHTML);

    window.location.assign("news.html");
}

createNews('./assets/news1.jpg', 'EUA devem impedir entrada de brasileiros, diz conselheiro de Trump', "Esperamos que seja temporária', afirmou Robert O'Brien a canal de TV americano.", 'Há 50 minutos - Em mundo');
createNews('./assets/news2.jpg', 'Toffoli é internado, passa por cirurgia e apresenta sintomas de Covid-19', "Presidente do STF passou por drenagem de abscesso e respira sem aparelhos, segundo nota do Supremo.", 'Há 50 minutos - Em mundo');
createNews('./assets/news3.jpg', 'Secretário de vigilância do Ministério da Saúde anuncia que deixa cargo amanhã', "Wanderson de Oliveira defende o isolamento social. Ministério não anunciou sucessor.", 'Há 50 minutos - Em mundo');
