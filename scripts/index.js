//редактировать профиль
const btnEditInfo = document.querySelector('.profile__edit-info');  // кнопка открытия попапа
const popupInfo = document.getElementById('edit-info');             // попап 'редактировать профиль'
const popupInfoClose = popupInfo.querySelector('.popup__close');    // кнопка закрытия попапа 
const popupInfoForm = popupInfo.querySelector('.popup__form');      // форма попапа
// 'имя' на странице профиля и в поле ввода
let profileName = document.querySelector('.profile__name');
let popupName = document.getElementById('name');
// 'о себе' на странице профиля и в поле ввода
let profileAbout = document.querySelector('.profile__about');
let popupAbout = document.getElementById('about');

//добавить фото
const btnAddPhoto = document.querySelector('.profile__add-photo');  // кнопка открытия попапа
const popupPhoto = document.getElementById('add-photo');            // попап 'добавить фото'
const popupPhotoClose = popupPhoto.querySelector('.popup__close');  // кнопка закрытия попапа 
const popupPhotoForm = popupPhoto.querySelector('.popup__form');    // форма попапа



//открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

//установить значения инпутов из 'информация профиля'
function setInputsValue() {
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}

//закрыть попап без сохранения изменений
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//установить значения 'информация профиля' из инпутов
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


//Шесть карточек «из коробки»
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


//начальные карточки в галерее
function defaultCard() {
    initialCards.forEach((item) => {
        const cardsContainer = document.querySelector('.gallery__list');
        const photoTemplate = document.getElementById('photo-template').content;
        const photoElement = photoTemplate.querySelector('.gallery__card').cloneNode(true);
        cardsContainer.append(photoElement);

        photoElement.querySelector('.gallery__photo-title').textContent = item.name;
        photoElement.querySelector('.gallery__photo').src = item.link;
    })

}

defaultCard();

//создать карточку по template шаблону и добавить ее в начало галереи
//присвоить карточке название и ссылку на картинку из инпутов
function createNewCard() {
    const cardsContainer = document.querySelector('.gallery__list');
    const photoTemplate = document.getElementById('photo-template').content;
    const photoElement = photoTemplate.querySelector('.gallery__card').cloneNode(true);
    cardsContainer.prepend(photoElement);
    const titleValue = document.getElementById('place').value;
    const sourceValue = document.getElementById('source').value;

    photoElement.querySelector('.gallery__photo-title').textContent = titleValue;
    photoElement.querySelector('.gallery__photo').src = sourceValue;
}

//создать новое фото с описанием
function saveChangesPhoto(evt) {
    evt.preventDefault();
    createNewCard();
    evt.currentTarget.reset();
    closePopup(popupPhoto);
}

//открыть попап 'редактировать профиль'
btnEditInfo.addEventListener('click', () => { openPopup(popupInfo); setInputsValue(); });
//закрыть попап 'редактировать профиль'
popupInfoClose.addEventListener('click', () => closePopup(popupInfo));
//сохранить в информацию профиля
popupInfoForm.addEventListener('submit', saveChangesInfo);

//открыть попап 'добавить фото'
btnAddPhoto.addEventListener('click', () => openPopup(popupPhoto));
//закрыть попап 'добавить фото'
popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));
//сохранить новое фото с описанием
popupPhotoForm.addEventListener('submit', saveChangesPhoto);



//псевдомассив фото-карточек
const cardList = document.querySelectorAll('.gallery__card');

//удалить выбранную карточку
let deleteCard = (evt) => {
    evt.preventDefault();
    console.log(123);
    let target = evt.target;
    let currentCard = evt.currentTarget;
    if (target.classList.contains('gallery__delete-photo')) {
        currentCard.removeEventListener('click', deleteCard);
        currentCard.remove();
    }
}
//при клике на любую карточку из псевдомассива вызывается функция ее удаления
cardList.forEach((card) => { card.addEventListener('click', deleteCard); });


//поставить лайк выбранной карточке
let likeCard = (evt) => {
    evt.preventDefault();
    console.log(123);
    let target = evt.target;
    if (target.classList.contains('gallery__photo-like')) {
        target.classList.toggle('gallery__photo-like_active');
    }
}
//при клике на любую карточку из псевдомассива лайк становится активным
cardList.forEach((card) => { card.addEventListener('click', likeCard); });