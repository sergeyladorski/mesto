import { Card } from './Card.js'
import { validationConfig, FormValidator } from './FormValidator.js'
//все popup на странице
const pagePopups = document.querySelectorAll('.popup');
//popup 'редактировать профиль'
const btnEditInfo = document.querySelector('.profile__edit-info');  // кнопка открытия попапа
const popupInfo = document.querySelector('#edit-info');             // попап 'редактировать профиль'
const formInfo = popupInfo.querySelector('.form');                  // форма 'редактировать профиль'
// 'имя' на странице и в input
const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('#name');
// 'о себе' на странице и в input
const profileAbout = document.querySelector('.profile__about');
const popupAbout = document.querySelector('#about');
//данные карточки в input
const placeInput = document.querySelector('#place');
const sourceInput = document.querySelector('#source');
//popup 'добавить фото'
const btnAddPhoto = document.querySelector('.profile__add-photo');  // кнопка открытия попапа
const popupPhoto = document.querySelector('#add-photo');            // попап 'добавить фото'
const formPhoto = popupPhoto.querySelector('.form');                // форма 'добавить фото'
//popup 'просмотр фото'
const popupView = document.querySelector('#view');                  //попап 'просмотр фото'
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
    document.addEventListener('keydown', closeByEscape);
}
// закрыть по Esc
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup);
    }
}
//установить значения input из 'информация профиля'
function setInputsValue() {
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}
//закрыть попап без сохранения изменений
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
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
//создать заготовку карточки
const createCard = (data) => {
    const card = new Card(data, '#photo-template');
    const cardElement = card.generateCard();
    return cardElement;
}
//начальные карточки
initialCards.forEach((data) => {
    createCard(data);
    cardsContainer.append(createCard(data));
});
//добавить карточку пользователя
const createUserCard = (evt) => {
    evt.preventDefault();
    const data = {
        name: placeInput.value,
        link: sourceInput.value,
    }
    createCard(data);
    cardsContainer.prepend(createCard(data));
    evt.currentTarget.reset();
    closePopup(popupPhoto);
}
//запуск валидации форм
const formValidatorInfo = new FormValidator(validationConfig, '#form-info');
formValidatorInfo.enableValidation();
const formValidatorAdd = new FormValidator(validationConfig, '#form-photo');
formValidatorAdd.enableValidation();

//открыть попап
btnEditInfo.addEventListener('click', () => {
    openPopup(popupInfo);
    setInputsValue();
    formValidatorInfo.resetValidation();
});
btnAddPhoto.addEventListener('click', () => {
    openPopup(popupPhoto);
    formValidatorAdd.resetValidation();
});
//закрыть попап 
pagePopups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if ((evt.target.classList.contains('popup_opened'))
            || (evt.target.classList.contains('popup__close'))) {
            closePopup(popup);
        }
    })
})
//сохранить и закрыть попап 
formInfo.addEventListener('submit', saveChangesInfo);
formPhoto.addEventListener('submit', createUserCard);

export { popupView, openPopup }