import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {

        const source = document.querySelector('.sources');
        if (source !== null) {
            source.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: any) => this.view.drawNews(data)));
        }
        
        this.controller.getSources((data: any) => this.view.drawSources(data));
    }
}

export default App;
