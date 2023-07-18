export default class Api {
  constructor ({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkQueryResult(res) {
    if(res.ok) {
      return res.json();
    } 
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { 
      headers: this._headers
    })
    .then(res => this._checkQueryResult(res))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => this._checkQueryResult(res))
  }
  
  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink,
          })
        })
        .then(res => this._checkQueryResult(res))
  }

  sendUserInfo(data) {
   return fetch(`${this._baseUrl}/users/me`, {
  method: 'PATCH',
  headers: this._headers,
  body: JSON.stringify({
    name: data.name,
    about: data.about
      })
    })
    .then(res => this._checkQueryResult(res))
  }

  sendUserCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.newPlace,
        link: data.pictureLink
          })
        })
        .then(res => this._checkQueryResult(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
        })
        .then(res => this._checkQueryResult(res))
  }

  setLikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
        })
        .then(res => this._checkQueryResult(res))
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
        })
        .then(res => this._checkQueryResult(res))
  }
}