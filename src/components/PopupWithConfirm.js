import Popup from './Popup.js';

class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleConfirm) {
        super(popupSelector);
        this.handleConfirm = handleConfirm;
        this._form = this.popup.querySelector('.form')
    }
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleConfirm(this.cardId, this.newCard)
        });
        super.setEventListeners();
    }
    open(cardId, newCard) {
        this.cardId = cardId
        this.newCard = newCard
        super.open()
    }
}
export default PopupWithConfirm;