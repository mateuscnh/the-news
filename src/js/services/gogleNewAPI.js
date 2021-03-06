async function api(topic = '', category = '', page = 1) {
    const apiKey = '655d56f1d9524f9f832ec33a65a74eb6';
    let articles = [];
    let url = `http://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}&page=${page}`;

    if (topic != '') {
        url = `http://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=${apiKey}&page=${page}`;
    }
    if (category != '') {
        url = `http://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=${apiKey}&page=${page}`;
    }

    await fetch(url)
        .then((response) => {
            return response.json();
        }).then(data => {
            for (const key in data.articles) {
                const { title, description, content, publishedAt, url, urlToImage } = data.articles[key];
                try {
                    if ((urlToImage.indexOf('filters') != -1)) {
                        // With this "filters..." the image does not load
                        urlToImage = urlToImage.replace("filters:cover():strip_icc()/", "");
                    }
                } catch (err) {
                    console.log(err);
                    continue;
                }

                content = treatContent(content);
                publishedAt = treatDate(publishedAt);

                articles.push({
                    title,
                    description,
                    content,
                    publishedAt,
                    url,
                    urlToImage
                });
            }
        });

    return articles;
}

function treatDate(date) {
    //date from API (2020-06-09T17:10:04Z)
    let newDate = date.split('T');
    newDate = newDate[0];
    newDate = newDate.replace('-', '/');
    newDate = newDate.replace('-', '/');
    return newDate;
}

function treatContent(content) {
    // ex: [+1254 chars]
    try {
        let newContent = content.split('[+');
        newContent = newContent[0];
        return newContent;
    } catch (err) {
        console.log(err)
        return content;
    }
}

export default api;