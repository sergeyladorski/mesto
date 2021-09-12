const edit = document.querySelector('.profile__edit-info');     // кнопка 'редактировать профиль'
const popup = document.querySelector('.popup');                 // попап 'редактировать профиль'
const popupClose = document.querySelector('.popup__close');     // кнопка закрытия попапа

let profileName = document.querySelector('.profile__name');     // 'имя' на странице профиля и в поле ввода
let popupName = document.querySelector('.popup__name');

let profileAbout = document.querySelector('.profile__about');   // 'о себе' на странице профиля и в поле ввода
let popupAbout = document.querySelector('.popup__about');


//открыть попап 'редактировать профиль'
function popupOpen() {
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
}

//закрыть попап 'редактировать профиль'
function close() {
    popup.classList.remove('popup_opened');
}

//сохранить в информацию профиля
function saveChanges(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    close();
}


edit.addEventListener('click', popupOpen);          //открыть попап 'редактировать профиль'
popupClose.addEventListener('click', close);        //закрыть попап 'редактировать профиль'
popup.addEventListener('submit', saveChanges);      //сохранить в информацию профиля