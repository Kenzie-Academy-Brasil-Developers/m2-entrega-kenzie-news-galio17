export class News {

    static createMainNews(news) {
        const newsArticle = document.getElementById('mainNews');
        const newsLink = this.createNews(news);

        newsArticle.append(newsLink);
    }

    static listNews(newsList) {
        const newsContainer = document.getElementById('newsContainer');
        newsList.forEach(news => {
            const newsArticle = document.createElement('article');
            const newsLink = this.createNews(news);

            newsArticle.classList.add('newsContainer__newsItem', 'newsItem');

            newsArticle.append(newsLink);
            newsContainer.append(newsArticle);
        });
    }
    
    static createNews(news) {
        const newsLink = document.createElement('a');
        const newsFigure = document.createElement('figure');
        const newsImg = document.createElement('img');
        const newsInfo = this.createNewsInfo(news);

        newsLink.classList.add('newsContainer__news', 'news');
        newsFigure.classList.add('news__figure');
        newsImg.classList.add('news__img');
        newsInfo.classList.add('news__info', 'info');

        newsLink.href = news.noticia_completa;
        newsLink.target = '_blank'
        newsImg.src = news.imagem;

        newsFigure.append(newsImg);
        newsLink.append(newsFigure, newsInfo);

        return newsLink;
    }

    static createNewsInfo({ categoria, titulo, resumo, fonte }) {
        const newsInfo = document.createElement('section');
        const newsCategory = document.createElement('h3');
        const newsTitle = document.createElement('h2');
        const newsDescription = document.createElement('p');
        const newsFont = document.createElement('span');

        newsCategory.classList.add('info__category');
        newsTitle.classList.add('info__title');
        newsDescription.classList.add('info__description');
        newsFont.classList.add('info__font');

        newsCategory.innerText = categoria;
        newsTitle.innerText = titulo;
        newsDescription.innerText = resumo;
        newsFont.innerText = `Fonte: ${fonte}`;

        newsInfo.append(newsCategory, newsTitle, newsDescription, newsFont)

        return newsInfo;
    }
}