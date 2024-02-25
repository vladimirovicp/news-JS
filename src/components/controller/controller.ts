import AppLoader from './appLoader';

import { Endpoint, Callback } from '../miantypes';

class AppController extends AppLoader {
    public getSources(callback: Callback): void {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId !== null) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: Endpoint.Everything,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );

                    }
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
