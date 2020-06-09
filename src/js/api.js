async function api(topic = '', category = '', page = 1) {
    let apiKey = '655d56f1d9524f9f832ec33a65a74eb6';
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
                        urlToImage = urlToImage.replace("filters:cover():strip_icc()/", "");
                    }
                } catch (err) {
                    continue;
                }
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

export default api;