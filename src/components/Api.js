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
    .then(this._checkQueryResult)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._checkQueryResult)
  }
  
  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink,
          })
        })
        .then(this._checkQueryResult)
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
    .then(this._checkQueryResult)
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
        .then(this._checkQueryResult)
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
        })
        .then(this._checkQueryResult)
  }

  setLikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
        })
        .then(this._checkQueryResult)
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
        })
        .then(this._checkQueryResult)
  }
}