import './sources.css';

class Sources {
    draw(data: { name: string; id: string }[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp !== null) {
                const sourceClone = sourceItemTemp.content.cloneNode(true);

                const itemName = (sourceClone as HTMLElement).querySelector('.source__item-name');
                if (itemName) {
                    itemName.textContent = item.name;
                }

                const itemId = (sourceClone as HTMLElement).querySelector('.source__item');
                if (itemId) {
                    itemId.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            }
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
