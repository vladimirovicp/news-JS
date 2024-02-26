import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import { NewsItemData, SourcesData } from '../miantypes';

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
            source.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data): void => this.view.drawNews(<NewsItemData>data))
            );
        }

        this.controller.getSources((data) => this.view.drawSources(<SourcesData>data));
    }
}

export default App;
