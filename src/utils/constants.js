//user info on the page
export const userName = document.querySelector('.profile__name');
export const userDesc = document.querySelector('.profile__desc');
export const userAvatar = document.querySelector('.profile__avatar');
//user info inputs
export const nameInput = document.querySelector('#name');
export const aboutInput = document.querySelector('#about');
//page forms
export const formInfo = document.querySelector('#form-info');
export const formCard = document.querySelector('#form-card');
export const formAvatar = document.querySelector('#form-avatar');
//open popup buttons 'добавить фото' and 'редактировать профиль'
export const btnAddCard = document.querySelector('.profile__add-card');
export const btnEditInfo = document.querySelector('.profile__edit-info');
export const btnChangeAvatar = document.querySelector('.profile__change-avatar');
//gallery
export const containerCard = document.querySelector('.gallery__list');
export const templateCardSelector = '#card-template';
//popup selectors
export const popupCardSelector = '#popup-card';
export const popupAvatarSelector = '#popup-avatar';
export const popupConfirmSelector = '#popup-confirm';
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
//submit in progress visualisation
export const changesInProgress = (isLoading, popupSelector) => {
    const popupElement = document.querySelector(popupSelector);
    const submitBtn = popupElement.querySelector('.form__save');
    if (isLoading) {
        submitBtn.value = 'Сохранение...';
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.classList.add('form__save_inactive')
    }
    else if (!isLoading) {
        submitBtn.value = submitBtn.title;
        submitBtn.removeAttribute('disabled');
        submitBtn.classList.remove('form__save_inactive')
    }
}