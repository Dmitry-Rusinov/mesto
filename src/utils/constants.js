//Кнопки открытия попапов
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const popupEditAvatarButtonOpen = document.querySelector('.profile__edit-avatar');
//Попапы и формы
const popupEditProfile = document.querySelector('#editProfile');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const popupAddCard = document.querySelector('#popupAddCard');
const addCardForm = popupAddCard.querySelector('.popup__form');
const inputNameField = document.querySelector('.popup__input_user_name');
const inputJobField = document.querySelector('.popup__input_user_job');
const popupEditAvatar = document.querySelector('#popupEditAvatar');
const formEditAvatarProfile = popupEditAvatar.querySelector('.popup__form');
//Объект настройки валидации форм
const validationPropertiesObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

export {buttonOpenEditProfilePopup, 
  formEditProfile, inputNameField, inputJobField, validationPropertiesObject,
   popupAddCardButtonOpen, addCardForm, popupEditAvatarButtonOpen, formEditAvatarProfile};