const myId = 'db1456b7b257895ef7a749a0';
const myToken = '115fa395-010f-4ccc-93c6-6dc65854738f';


export default class Api {
  constructor(options) {
    this.source = options.source
    this.cohort = options.cohort
    this.token = options.token
  }
  getUserInfo() {
    return fetch(`${this.source}/${this.cohort}/users/me`, {
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkServerResponse(res))
  }

  patchUserInfo({ name: inputName, about: inputJob }) {
    return fetch(`${this.source}/${this.cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName,
        about: inputJob,
      })
    })
      .then(res => this._checkServerResponse(res))
  }

  getCards() {
    return fetch(`${this.source}/${this.cohort}/cards`, {
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkServerResponse(res))
  }
  postCard({ name: inputName, link: inputSRC }) {
    return fetch(`${this.source}/${this.cohort}/cards`, {
      method: 'POST',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName,
        link: inputSRC
      })
    })
      .then(res => this._checkServerResponse(res))
  }
  deleteCard(cardId) {
    return fetch(`${this.source}/${this.cohort}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.token,
      }
    })
      .then(res => this._checkServerResponse(res))
  }
  setLike(cardId) {
    return fetch(`${this.source}/${this.cohort}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this.token,
      }
    })
      .then(res => this._checkServerResponse(res))
  }
  deleteLike(cardId) {
    return fetch(`${this.source}/${this.cohort}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.token,
      }
    })
      .then(res => this._checkServerResponse(res))
  }
  patchUserAvatar(avatarSRC) {
    return fetch(`${this.source}/${this.cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarSRC
      })
    })
      .then(res => this._checkServerResponse(res))
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json()
    }
    // Если происходит ошибка, отклоняем промис
    return Promise.reject(`${res.status}`)
  }
}