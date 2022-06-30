import { Api } from "../models/Api.js";
import { News } from "../models/News.js";

export class Controller {
    static async showNews() {
        const news = await Api.getNews();
        const randomNews = Math.floor(Math.random() * news.length);
        const mainNews = news.splice(randomNews, 1)[0];

        console.log(mainNews)

        News.listNews(news);
        News.createMainNews(mainNews);
    }
}