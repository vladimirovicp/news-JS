interface NewsItem {
    author: string | null;
    description: string;
    publishedAt: string;
    source: {
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string | null;
}

export {
    NewsItem,
}