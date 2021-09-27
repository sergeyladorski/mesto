//popup 'редактировать профиль'
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

//popup 'добавить фото'
const btnAddPhoto = document.querySelector('.profile__add-photo');  // кнопка открытия попапа
const popupPhoto = document.getElementById('add-photo');            // попап 'добавить фото'
const popupPhotoClose = popupPhoto.querySelector('.popup__close');  // кнопка закрытия попапа 
const popupPhotoForm = popupPhoto.querySelector('.popup__form');    // форма попапа



//открыть попап
function openPopup(popup) {
    popup.classList.add('popup_opened');
    console.log(123);
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


const cardsContainer = document.querySelector('.gallery__list');            //список карточек
const cardTemplate = document.getElementById('photo-template').content;     //шаблон карточки
//начальные карточки в галерее
function renderCards() {
    initialCards.forEach((item) => {
        const initialCard = cardTemplate.querySelector('.gallery__card').cloneNode(true);

        initialCard.querySelector('.gallery__photo-title').textContent = item.name;
        initialCard.querySelector('.gallery__photo').src = item.link;

        cardsContainer.append(initialCard);
    })
}

renderCards();


//создать новое фото с описанием
function createNewCard(evt) {
    evt.preventDefault();
    //создать карточку по template шаблону и добавить ее в начало галереи
    const newCardElement = cardTemplate.querySelector('.gallery__card').cloneNode(true);
    cardsContainer.prepend(newCardElement);
    //присвоить карточке название и ссылку на картинку из инпутов
    const titleValue = document.getElementById('place').value;
    const sourceValue = document.getElementById('source').value;

    newCardElement.querySelector('.gallery__photo-title').textContent = titleValue;
    newCardElement.querySelector('.gallery__photo').src = sourceValue;
    //задать слушателей событий
    setEventListener(newCardElement);

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
popupPhotoForm.addEventListener('submit', createNewCard);


//удалить выбранную карточку
let deleteCard = (evt) => {
    evt.preventDefault();
    let target = evt.target;
    let currentCard = evt.currentTarget.closest('.gallery__card');
    if (target.classList.contains('gallery__delete-photo')) {
        currentCard.removeEventListener('click', deleteCard);
        currentCard.remove();
    }
}

//поставить лайк выбранной карточке
let likeCard = (evt) => {
    evt.preventDefault();
    let target = evt.target;
    if (target.classList.contains('gallery__photo-like')) {
        target.classList.toggle('gallery__photo-like_active');
    }
}

//массив фото-карточек
const cardList = document.querySelectorAll('.gallery__card');
//при клике на любую карточку из массива вызывается функция ее удаления
cardList.forEach((card) => { card.addEventListener('click', deleteCard); });
//при клике на любую карточку из массива лайк становится активным
cardList.forEach((card) => { card.addEventListener('click', likeCard); });

function setEventListener(item) {
    item.querySelector(".gallery__delete-photo").addEventListener("click", deleteCard);
    item.querySelector(".gallery__photo-like").addEventListener("click", likeCard);
    item.querySelector(".gallery__photo").addEventListener("click", openPopupView);
}


const popupView = document.getElementById('view');

let openPopupView = (evt) => {
    evt.preventDefault();
    let target = evt.target;
    let currentCard = evt.currentTarget.closest('.gallery__card');

    let cardPhoto = currentCard.querySelector('.gallery__photo');
    let popupPhoto = popupView.querySelector('.popup__photo')
    

    let cardTitle = currentCard.querySelector('.gallery__photo-title');
    let popupTitle = popupView.querySelector('.popup__photo-title')

    if (target.classList.contains('gallery__photo')) {
        currentCard.removeEventListener('click', openPopup(popupView));
        popupPhoto.src = cardPhoto.src;
        popupTitle.textContent = cardTitle.textContent;
    }   
}

cardList.forEach((card) => { card.addEventListener('click', openPopupView); });
const popupViewClose = popupView.querySelector('.popup__close');    
popupViewClose.addEventListener('click', () => closePopup(popupView));

