class Section {
    constructor({ renderer }, container) {
        this._renderer = renderer;
        this._container = container;
    }
    renderItems(items) {
        items.forEach(item => this._renderer(item));
    }
    addItem(data, isNewCard) {
        if (isNewCard === true) {
            this._container.prepend(data)
        } else {
            this._container.append(data);
        }
    }
}
export default Section;