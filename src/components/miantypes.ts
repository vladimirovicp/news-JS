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

interface NewsItemData extends NewsItem {
    totalResults: number;
    articles: Array<NewsItem>;
}

type NewsSource = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

interface SourcesData extends NewsItemData {
    sources: Array<NewsSource>;
}

type Callback = <T>(data: T) => void;
//в TypeScript использует обобщенные типы для определения функции с параметром типа T
// type Callback - это объявление пользовательского типа под названием Callback.
// <T> - это обобщенный тип, который говорит TypeScript, что функция Callback принимает один параметр обобщенного типа T.
// (data: T) - это объявление параметра функции data, который ожидается быть типа T.
// => void - это указание, что функция не возвращает значения (имеет тип void).

enum Endpoint {
    Everything = 'everything',
    Sources = 'sources',
}

type Options = {
    apiKey: string;
    sources: string;
};

export { NewsItem, NewsItemData, Endpoint, Options, SourcesData, NewsSource, Callback };
