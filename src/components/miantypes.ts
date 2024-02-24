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
};

//type Callback = <T>(data: T) => void;   
//в TypeScript использует обобщенные типы для определения функции с параметром типа T
// type Callback - это объявление пользовательского типа под названием Callback.
// <T> - это обобщенный тип, который говорит TypeScript, что функция Callback принимает один параметр обобщенного типа T.
// (data: T) - это объявление параметра функции data, который ожидается быть типа T.
// => void - это указание, что функция не возвращает значения (имеет тип void).

export {
    NewsItem,
}