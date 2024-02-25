import News from './news/news';
import Sources from './sources/sources';

import { NewsItemData, SourcesData, NewsSource } from '../miantypes';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsItemData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData): void {
        const values: Array<NewsSource> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
