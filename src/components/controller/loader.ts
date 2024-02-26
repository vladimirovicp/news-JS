import { Endpoint, Options, Callback } from '../miantypes';

enum HttpMethod {
    GET = 'GET',
}

class Loader {
    // private baseLink: string;
    // private options: Pick<Options, 'apiKey'>;

    constructor(
        private baseLink: string,
        private options: Pick<Options, 'apiKey'>
    ) {
        // this.baseLink = baseLink;
        // this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: Partial<Options> },
        callback: Callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load(HttpMethod.GET, endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: Partial<Options>, endpoint: Endpoint): string {
        const urlOptions: Partial<Options> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: HttpMethod, endpoint: Endpoint, callback: Callback, options: Partial<Options> = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: Callback) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
