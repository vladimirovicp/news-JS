import './news.css';

interface NewsItem {
    author: string | null;
    source: {
        name: string;
    };
    publishedAt: string;
    urlToImage: string | null;
    title: string;
    description: string;
    url: string;
}

class News {
    draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if( newsItemTemp !== null){
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true);

                if(newsClone){
                    if (idx % 2) (newsClone as HTMLElement).querySelector('.news__item')!.classList.add('alt');
                }
    
                //ПОПРАВИТЬ!

                // const testNewsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;
                // if(testNewsClone){
                //     const testIMG = testNewsClone.querySelector('.news__meta-photo') as HTMLElement;
                //     if (testIMG) {
                //         testIMG.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                //     }

                // }



                ((<Element>newsClone).querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;


                (newsClone as HTMLElement).querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
                (newsClone as HTMLElement).querySelector('.news__meta-date')!.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
    
                (newsClone as HTMLElement).querySelector('.news__description-title')!.textContent = item.title;
                (newsClone as HTMLElement).querySelector('.news__description-source')!.textContent = item.source.name;
                (newsClone as HTMLElement).querySelector('.news__description-content')!.textContent = item.description;
                (newsClone as HTMLElement).querySelector('.news__read-more a')!.setAttribute('href', item.url);
    
                fragment.append(newsClone);
            });
    
            document.querySelector('.news')!.innerHTML = '';
            document.querySelector('.news')!.appendChild(fragment);
        }
    }
}

export default News;
