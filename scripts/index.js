import {Card} from './Card.js'
import{validationConfig, FormValidator} from './FormValidator.js'

//popup 'редактировать профиль'
const btnEditInfo = document.querySelector('.profile__edit-info');  // кнопка открытия попапа
const popupInfo = document.querySelector('#edit-info');             // попап 'редактировать профиль'
const popupInfoClose = popupInfo.querySelector('.popup__close');    // кнопка закрытия попапа 
const formInfo = popupInfo.querySelector('.form');                  // форма 'редактировать профиль'
// 'имя' на странице и в input
const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('#name');
// 'о себе' на странице и в input
const profileAbout = document.querySelector('.profile__about');
const popupAbout = document.querySelector('#about');
//popup 'добавить фото'
const btnAddPhoto = document.querySelector('.profile__add-photo');  // кнопка открытия попапа
const popupPhoto = document.querySelector('#add-photo');            // попап 'добавить фото'
const popupPhotoClose = popupPhoto.querySelector('.popup__close');  // кнопка закрытия попапа 
const formPhoto = popupPhoto.querySelector('.form');                // форма 'добавить фото'
//popup 'просмотр фото'
const popupView = document.querySelector('#view');                  //попап 'просмотр фото'
const popupViewClose = popupView.querySelector('.popup__close');    // кнопка закрытия попапа 
//галерея
const cardsContainer = document.querySelector('.gallery__list');    //список карточек
//начальные карточки
const initialCards = [
    {
        name: 'Скалистый склон',
        link: './images/gallery/1.jpg'
    },
    {
        name: 'Прибрежная полоса',
        link: './images/gallery/2.jpg'
    },
    {
        name: 'Вид на залив',
        link: './images/gallery/3.jpg'
    },
    {
        name: 'Лесной пейзаж',
        link: './images/gallery/4.jpg'
    },
    {
        name: 'Хайкинг',
        link: './images/gallery/5.jpg'
    },
    {
        name: 'Камни',
        link: './images/gallery/6.jpg'
    }
];

//открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
    closePopupOverlay(popup);
    popup.addEventListener('keydown', closePopupEsc(popup));
}
//закрыть по overlay
function closePopupOverlay(popup) {
    popup.addEventListener('click', (evt) => {
        closePopup(evt.target);
    })
}
//закрыть по Esc
function closePopupEsc(popup) {
    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            closePopup(popup);
        }
    })
}
//установить значения input из 'информация профиля'
function setInputsValue() {
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}
//закрыть попап без сохранения изменений
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('keydown', closePopupEsc(popup));
}
//установить значения 'информация профиля' из input
function saveInfoValue() {
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
}
//сохранить изменения профиля
function saveChangesInfo(evt) {
    evt.preventDefault();
    saveInfoValue();
    closePopup(popupInfo);
}
//начальные карточки
const defaultCards = () => {
    initialCards.forEach((data) => {
        const card = new Card(data, '#photo-template');
        const cardElement = card.generateCard();
    
        cardsContainer.append(cardElement);
    });
}
defaultCards();
//новые карточки
const createNewCard = (evt) => {
    evt.preventDefault();
    const data = {
        name: document.querySelector('#place').value,
        link: document.querySelector('#source').value,
    }
    const card = new Card(data, '#photo-template');
    const cardElement = card.generateCard();

    cardsContainer.prepend(cardElement);
    evt.currentTarget.reset();
    closePopup(popupPhoto);
}
//запуск валидации форм
const formValidatorInfo = new FormValidator(validationConfig, '#form-info');
formValidatorInfo.enableValidation();
const formValidatorAdd = new FormValidator(validationConfig, '#form-photo');
formValidatorAdd.enableValidation();

//открыть попап 
btnEditInfo.addEventListener('click', () => { openPopup(popupInfo); setInputsValue(); });   //редактировать профиль
btnAddPhoto.addEventListener('click', () => openPopup(popupPhoto));                         //добавить фото
//закрыть попап 
popupInfoClose.addEventListener('click', () => closePopup(popupInfo));                      //редактировать профиль
popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));                    //добавить фото
popupViewClose.addEventListener('click', () => closePopup(popupView));                      //просмотр фото
//сохранить и закрыть попап 
formInfo.addEventListener('submit', saveChangesInfo);                                  //информация профиля
formPhoto.addEventListener('submit', createNewCard);

export {popupView, openPopup}