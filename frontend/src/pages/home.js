
function createNews(imagePath, textH1, textP, textTime) {
    const main = document.getElementById('main');
    let postWrap = document.createElement('div');
    postWrap.setAttribute('class', 'postWrap');

    let imgPost = document.createElement('div');
    imgPost.setAttribute('id', 'imgPost');
    imgPost.setAttribute('style', "background: url(" + imagePath + ") center center / contain no-repeat");
    postWrap.appendChild(imgPost);

    let textPost = document.createElement('div');
    textPost.setAttribute('id', 'textPost');
    let title = document.createElement('h1');
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

createNews('images/news2.jpg', 'Tradutor da bexiga', 'pois é', '50 minutos');

