import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

import {initialCards, buttonOpenEditProfilePopup, formEditProfile, inputNameField, formEditAvatarProfile,
  inputJobField, validationPropertiesObject, popupAddCardButtonOpen, addCardForm, popupEditAvatarButtonOpen} 
from '../utils/constants.js';

fetch('https://mesto.nomoreparties.co/v1/cohort-71/cards', {
  headers: {
    authorization: '03ed5ff2-8963-4b3f-9a71-48eed9962646'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

  fetch('https://mesto.nomoreparties.co/v1/cohort-71/users/me', {
  headers: {
    authorization: '03ed5ff2-8963-4b3f-9a71-48eed9962646'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

function getProfileInputList ({userName, userJob}) {
  inputNameField.value = userName;
  inputJobField.value = userJob; 
};  

const inputListProfile = new UserInfo ({userName: '.profile__info-title', userJob: '.profile__subtitle'});

//Попап с подтверждением удаления карточки
const popupConfirmationRemove = new PopupWithConfirmation ({popupSelector: '.popup_deleteCard'})

popupConfirmationRemove.setEventListeners();

//Попап с формой редактирования аватара профиля
const editAvatarPopup = new PopupWithForm ({popupSelector: '.popup_edit-avatar',
submitForm: (item) => {
  const objInputs = {
  link: item.avatarLink
};
console.log(objInputs);
}
});

//Слушатель на кнопке редактирования аватара профиля
popupEditAvatarButtonOpen.addEventListener('click', () => {
  editAvatarPopup.open();
  formEditAvatarValidation.resetValidation();
});

//Попап с формой редактирования профиля
const editProfilePopup = new PopupWithForm ({popupSelector: '.popup_editProfile',
 submitForm: (item) => {
  inputListProfile.setUserInfo(item);
  editProfilePopup.close();
}
});

editProfilePopup.setEventListeners();

//Слушатель на кнопке открытия попапа профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
  const data = inputListProfile.getUserInfo();
  getProfileInputList({
    userName: data.userName,
    userJob: data.userJob
  })
  editProfilePopup.open();
  formEditProfileValidation.resetValidation();
});

//Попап с картинкой
const popupWithImage = new PopupWithImage ('.popup_image');

popupWithImage.setEventListeners();

const cardList = new Section ({renderer: (item) => cardList.addItem(createCard(item)) }, '.elements__card');

cardList.renderer(initialCards);

//Функция создания карточки
function createCard(data) {
  const cardContent = new Card ({ data: data, templateSelector: '.card-template', 
  handleCardClick: () => popupWithImage.open(data.name, data.link),
  handleIconDeleteCard: () => {
    popupConfirmationRemove.open();
    popupConfirmationRemove.handleDeleteCard();
  }
  });
  const cardElement = cardContent.generateCard();
  return cardElement;
}

//Попап с формой добавления карточки
const addCardPopup = new PopupWithForm ({popupSelector: '.popup_addCard',
submitForm: (item) => {
    const objInputs = {
    name: item.newPlace,
    link: item.pictureLink
  };
  cardList.addItem(createCard(objInputs));
  addCardPopup.close();
}
});

addCardPopup.setEventListeners();

//Слушатель на кнопку отрытия попапа добавления карточки
popupAddCardButtonOpen.addEventListener('click', () => {
  addCardPopup.open();
  addCardFormValidation.resetValidation();
});

//Валидация формы редактирования профиля
const formEditProfileValidation = new FormValidator(validationPropertiesObject, formEditProfile);
formEditProfileValidation.enableValidation();

//Валидация формы добавления карточки
const addCardFormValidation = new FormValidator(validationPropertiesObject, addCardForm);
addCardFormValidation.enableValidation();

//Валидация формы редактировани аватара профиля
const formEditAvatarValidation = new FormValidator(validationPropertiesObject, formEditAvatarProfile);
formEditAvatarValidation.enableValidation();