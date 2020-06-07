async function api(topic = '', page = 1) {
    let apiKey = '655d56f1d9524f9f832ec33a65a74eb6';
    let articles = [];
    let url = '';
    const deu = {};

    if (topic === '') {
        url = 'http://newsapi.org/v2/everything?' +
            'sources=globo&' +
            'sortBy=popularity&' +
            `apiKey=${apiKey}&` +
            `page=${page}`;
    } else {
        url = 'http://newsapi.org/v2/everything?' +
            'sources=globo&' +
            'from=2020-06-06&' +
            `q=${topic}&` +
            'sortBy=popularity&' +
            `apiKey=${apiKey}` +
            `page=${page}`;
    }

    await fetch(url)
        .then((response) => {
            return response.json();
        }).then(data => {
            for (const key in data.articles) {
                const { title, description, content, publishedAt, url, urlToImage } = data.articles[key];

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