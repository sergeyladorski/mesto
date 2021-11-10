// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. 
// Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: 
// элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. 
// Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.


//isReady

class UserInfo {
    constructor({ userNameSelector, userDescSelector }) {
        this.userName = userNameSelector;
        this.userInfo = userDescSelector;
    }
    getUserInfo() {
        return {
            name: this.userName.textContent,
            info: this.userInfo.textContent,
        }
    }
    setUserInfo({ name, info }) {
        this.userName.textContent = name;
        this.userInfo.textContent = info;
    }
}

export default UserInfo;