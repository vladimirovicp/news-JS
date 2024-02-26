import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        if (process.env.API_URL !== undefined && process.env.API_KEY !== undefined) {
            super(process.env.API_URL, {
                apiKey: process.env.API_KEY,
            });
        }
    }
}

export default AppLoader;
