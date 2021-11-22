import Popup from './Popup.js';

class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleConfirm) {
        super(popupSelector);
        this.handleConfirm = handleConfirm;
        this._form = this.popup.querySelector('.form')
    }
     setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            this.handleConfirm(evt)
        });
    }
}
export default PopupWithConfirm;