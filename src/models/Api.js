export class Api {
    static base = 'https://kenzie-news-api.herokuapp.com/api/news';

    static getNews() {
        return fetch(this.base).then((response) => response.json());
    }
}