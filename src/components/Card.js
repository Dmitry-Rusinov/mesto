
export default class Card {
  constructor({data, userId, templateSelector, handleCardClick, handleIconDeleteCard, handleLikeCard}) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._userId = userId; 
    this._ownerCardId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._hadleIconDeleteCard = handleIconDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector('.elements__button-like');
    this._likes = data.likes;
    this._buttonDelete = this._element.querySelector('.elements__button-delete');
    this._image = this._element.querySelector('.elements__picture');
    this._likeCounter = this._element.querySelector('.elements__likes-counter');
  }

  _getTemplate() {
    const templateCard = document
    .querySelector(this._templateSelector).content
    .querySelector('.elements__card-content').cloneNode(true);
    return templateCard;
  }

  generateCard() {
    this._setEventListeners();
    this.setLikeCard(this._likes);
    this._checkOwnerCard();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    return this._element;
  }

  _checkOwnerCard() {
    if(this._ownerCardId !== this._userId) {
      this._buttonDelete.remove();
    } 
  }

  checkLikeOwner() {
     if(this._likes.some((owner) =>  owner._id === this._userId)) {
      return true
     }
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', 
    () => {
      this._handleLikeCard(this._cardId);
    });
    this._buttonDelete.addEventListener('click', 
    () => this._hadleIconDeleteCard(this._cardId));
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  deleteCard() {
    const item = this._element;
    item.remove();
  }

  setLikeCard(likes) {
    this._likes = likes;
    this._likeCounter.textContent = this._likes.length;
    if(this.checkLikeOwner()){
      this._buttonLike.classList.add('elements__button-like_active')
    } 
    else {
      this._buttonLike.classList.remove('elements__button-like_active')
    }
  }
}
