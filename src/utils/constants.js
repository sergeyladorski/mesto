//user info on the page
export const userName = document.querySelector('.profile__name');
export const userDesc = document.querySelector('.profile__desc');
//user info inputs
export const nameInput = document.querySelector('#name');
export const infoInput = document.querySelector('#info');
//page forms
export const formInfo = document.querySelector('#form-info');
export const formPhoto = document.querySelector('#form-photo');
//open popup buttons 'добавить фото' and 'редактировать профиль'
export const btnAddPhoto = document.querySelector('.profile__add-photo');
export const btnEditInfo = document.querySelector('.profile__edit-info');
//gallery
export const containerCardSelector = document.querySelector('.gallery__list');
export const templatePhotoSelector = '#photo-template';
//popup selectors
export const popupPhotoSelector = '#popup-photo';
export const popupInfoSelector = '#popup-info';
export const popupViewSelector = '#view';
//настройки валидации
export const validationConfig = {
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}
//начальные карточки
export const initialCards = [
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