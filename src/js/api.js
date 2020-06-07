async function api(topic = '') {
    let apiKey = '655d56f1d9524f9f832ec33a65a74eb6';
    let articles = [];
    let url = '';
    const deu = {};

    if (topic === '') {
        url = 'http://newsapi.org/v2/everything?' +
            'sources=globo&' +
            'from=2020-06-06&' +
            'sortBy=popularity&' +
            `apiKey=${apiKey}`;


    } else {
        url = 'http://newsapi.org/v2/everything?' +
            'sources=globo&' +
            'from=2020-06-06&' +
            `q=${topic}&` +
            'sortBy=popularity&' +
            `apiKey=${apiKey}`;
    }

    await fetch(url)
        .then((response) => {
            return response.json();
        }).then(data => {
            for (let index = 0; index < data.articles.length; index++) {
                const { title, description, content, publishedAt, urlToImage } = data.articles[index];
                articles.push({
                    title,
                    description,
                    content,
                    publishedAt,
                    urlToImage
                });
            }
        });
    return articles;
}

export default api;