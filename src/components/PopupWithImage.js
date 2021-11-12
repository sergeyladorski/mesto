// Создайте класс PopupWithImage, который наследует от Popup. 
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.

//isReady

import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupImage = this.popup.querySelector('.popup__photo');
        this.popupImageTitle = this.popup.querySelector('.popup__photo-title');
    }
    open(data) {
        this.popupImage.src = data.link;
        this.popupImageTitle.textContent = data.name;
        this.popupImage.alt = data.name;
        super.open();
    }
}
export default PopupWithImage;