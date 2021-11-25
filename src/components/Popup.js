class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
        this._closeByEsc = this._closeByEsc.bind(this);
    }
    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEsc);
    }
    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEsc);
    }
    _closeByEsc(evt) {
        if (evt.key === 'Escape') {
          this.close();
        }
      }
    setEventListeners() {
        this.popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')
                || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}
export default Popup;