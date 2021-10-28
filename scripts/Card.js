import { popupView, openPopup } from './index.js'

class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }
    //получить шаблон карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);

        return cardElement;
    }
    //установить свойства карточки
    _setCardProps() {
        this._element.querySelector('.gallery__photo').src = this._link;
        this._element.querySelector('.gallery__photo-title').textContent = this._name;
        this._element.querySelector('.gallery__photo').alt = this._alt;
    }
    //установить обработчики событий
    _setEventListener() {
        this._element.querySelector(".gallery__delete-photo").addEventListener("click", this._deleteCard);
        this._element.querySelector(".gallery__photo-like").addEventListener("click", this._likeCard);
        this._element.querySelector(".gallery__photo").addEventListener("click", this._openPopupView);
    }
    //удалить карточку
    _deleteCard = () => {
        this._element.remove();
    }
    //поставить лайк карточке
    _likeCard = () => {
        this._element.querySelector('.gallery__photo-like').classList.toggle('gallery__photo-like_active');
    }
    //открыть фото карточки
    _openPopupView = () => {
        const cardPhoto =  this._element.querySelector('.gallery__photo');
        const popupPhoto = popupView.querySelector('.popup__photo')

        const cardTitle =  this._element.querySelector('.gallery__photo-title');
        const popupTitle = popupView.querySelector('.popup__photo-title')

        popupPhoto.src = cardPhoto.src;
        popupTitle.textContent = cardTitle.textContent;
        popupPhoto.alt = cardTitle.textContent;
        openPopup(popupView);
    }
    //создать карточку
    generateCard() {
        this._element = this._getTemplate();
        this._setCardProps();
        this._setEventListener();
        return this._element;
    }
}
export { Card }