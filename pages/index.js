import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

import {initialCards, popups, popupEditProfile, buttonOpenEditProfilePopup, 
  formEditProfile, inputNameField, inputJobField, validationPropertiesObject,
  userSignature, userInfo, popupAddCardButtonOpen, popupAddCard, addCardForm,
  inputCardDescription, inputPictureLink, modalImage, popupImage, popupTitle} from '../scripts/utils/constants.js';

function profileInputList ({userName, userJob}) {
  inputNameField.value = userName;
  inputJobField.value = userJob; 
};  

const inputListProfile = new UserInfo ({userName: '.profile__info-title', userJob: '.profile__subtitle'});

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
  profileInputList({
    userName: data.userName,
    userJob: data.userJob
  })
  editProfilePopup.open();
  formEditProfileValidation.resetValidation();
});
//Попап с картинкой
const popupWithImage = new PopupWithImage ('.popup_image');

popupWithImage.setEventListeners();

const cardList = new Section ({ items: initialCards, renderer: createCard }, '.elements__card');

cardList.renderer();

//Функция создания карточки
function createCard(data) {
  const cardContent = new Card ({ data: data, templateSelector: '.card-template', 
  handleCardClick: () => popupWithImage.open(data.name, data.link)
  });
  const cardElement = cardContent.generateCard();
  cardList.addItem(cardElement);
}

//Попап с формой добавления карточки
const addCardPopup = new PopupWithForm ({popupSelector: '.popup_addCard',
submitForm: (item) => {
    const objInputs = {
    name: item.newPlace,
    link: item.pictureLink
  };
  createCard(objInputs);
  addCardPopup.close();
}
});
console.log(addCardPopup)
addCardPopup.setEventListeners();

//Слушатель на кнопку отрытия попапа добавления карточки
popupAddCardButtonOpen.addEventListener('click', () => {
  addCardPopup.open();
  addCardFormValidation.resetValidation();
});

//Функция добавления карточки
/*function submitAddCard (evt) {
  evt.preventDefault();
  const objInputs = {
    name: inputCardDescription.value,
    link: inputPictureLink.value
  };
  const card = createCard(objInputs);
  addItem(card);
  closePopup(popupAddCard);
  evt.target.reset();
}*/

//Слушатель сабмита на форме попапа добавления карточки 
//addCardForm.addEventListener('submit', submitAddCard);

//Валидация формы редактирования профиля
const formEditProfileValidation = new FormValidator(validationPropertiesObject, formEditProfile);
formEditProfileValidation.enableValidation();

//Валидация формы добавления карточки
const addCardFormValidation = new FormValidator(validationPropertiesObject, addCardForm);
addCardFormValidation.enableValidation();