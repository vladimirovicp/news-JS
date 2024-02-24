import './news.css';

import { NewsItem } from '../../miantypes';

class News {
    public draw(data: NewsItem[]): void {

        const news: NewsItem[] = data.length >= 10 ? data.filter((_item:NewsItem, idx: number) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        // if( newsItemTemp !== null){
        if( newsItemTemp){
            news.forEach((item, idx) => {

                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                if(newsClone){
                    const newsItem = newsClone.querySelector('.news__item');
                    if (idx % 2){
                        newsItem!.classList.add('alt');
                        newsItem!.classList.add('even');
                    } else {
                        newsItem!.classList.add('odd'); 
                    }
                }

                const newsMeta = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                if(newsMeta){
                    newsMeta.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }


                newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
                newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
    
                newsClone.querySelector('.news__description-title')!.textContent = item.title;
                newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
                newsClone.querySelector('.news__description-content')!.textContent = item.description;
                newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);
    
                fragment.append(newsClone);
            });
    
            document.querySelector('.news')!.innerHTML = '';
            document.querySelector('.news')!.appendChild(fragment);
        }
    }
}

export default News;
