const myId = 'db1456b7b257895ef7a749a0';
const myToken = '115fa395-010f-4ccc-93c6-6dc65854738f';


export default class Api {
  constructor(config) {
    this.source = config.source
    this.cohort = config.cohort
    this.token = config.token
  }
  //checking if the server's responce is ok
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  //get user info
  getUserInfo() {
    return fetch(`${this.source}/${this.cohort}/users/me`, {
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkResponse(res))
  }
  //update user info
  patchUserInfo({ name: name, about: info }) {
    return fetch(`${this.source}/${this.cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: info,
      })
    })
      .then(res => this._checkResponse(res))
  }
  //update user avatar
  patchUserAvatar(avatar) {
    return fetch(`${this.source}/${this.cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(res => this._checkResponse(res))
  }
  //get cards
  getCards() {
    return fetch(`${this.source}/${this.cohort}/cards`, {
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkResponse(res))
  }
  //add a new card
  postCard({ name: place, link: source }) {
    return fetch(`${this.source}/${this.cohort}/cards`, {
      method: 'POST',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: place,
        link: source
      })
    })
      .then(res => this._checkResponse(res))
  }
  //delete selected card
  deleteCard(cardId) {
    return fetch(`${this.source}/${this.cohort}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.token,
      }
    })
      .then(res => this._checkResponse(res))
  }
  //like selected card
  setLike(cardId) {
    return fetch(`${this.source}/${this.cohort}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this.token,
      }
    })
      .then(res => this._checkResponse(res))
  }
  //remove like on selected card
  deleteLike(cardId) {
    return fetch(`${this.source}/${this.cohort}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.token,
      }
    })
      .then(res => this._checkResponse(res))
  }
}