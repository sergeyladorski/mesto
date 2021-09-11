const edit = document.querySelector('.profile__edit-info');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__save');
const page = document.querySelector('.page');



function popupOpen () {
    let profileName = document.querySelector('.profile__name');
    let profileAbout = document.querySelector('.profile__about');
    let popupName = document.querySelector('.popup__item_el_name');
    let popupAbout = document.querySelector('.popup__item_el_about');
    popupName.value = profileName.innerHTML;
    popupAbout.value = profileAbout.innerHTML;
    popup.classList.add('popup_opened');
    page.classList.add('page_no-scroll');
}

function close () {
    popup.classList.remove('popup_opened');
    page.classList.remove('page_no-scroll');
}

function closeOverlay (event) {
    if(event.target === event.currentTarget) {
        close ();
    }
}

function saveChanges (evt) {
    evt.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let profileAbout = document.querySelector('.profile__about');
    let popupName = document.querySelector('.popup__item_el_name');
    let popupAbout = document.querySelector('.popup__item_el_about');
  
    profileName.innerHTML = popupName.value;
    profileAbout.innerHTML = popupAbout.value;
    popup.classList.remove('popup_opened');

}


edit.addEventListener('click', popupOpen);
popupClose.addEventListener('click', close);
popup.addEventListener('click', closeOverlay)
popupSave.addEventListener('click', saveChanges);