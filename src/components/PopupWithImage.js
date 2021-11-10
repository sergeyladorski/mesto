// Создайте класс PopupWithImage, который наследует от Popup. 
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.

//isReady

import Popup from './Popup.js';

class PopupWithImage extends Popup {
    open(data) {
        const popupImage = document.querySelector('.popup__photo');
        const popupImageTitle = document.querySelector('.popup__photo-title');
        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;
        popupImage.alt = data.name;
        super.open();
    }
}
export default PopupWithImage;