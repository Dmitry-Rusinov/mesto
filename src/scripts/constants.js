const initialCards = [
  {
    name: 'Метро',
    link: 'https://images.unsplash.com/photo-1683836694582-80aa1f218f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Остров в океане',
    link: 'https://images.unsplash.com/photo-1682444944126-9fb22591061e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Воздушные шары',
    link: 'https://images.unsplash.com/photo-1683475962489-ddb36560f621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Девушка с довольным выражением лица',
    link: 'https://images.unsplash.com/photo-1671549845835-224455af2e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Отдых в палатке на природе',
    link: 'https://plus.unsplash.com/premium_photo-1664367986079-dd9933917ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Ретро автомобиль',
    link: 'https://images.unsplash.com/photo-1683538967101-a1543aac2dc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
  }
];

//Попап редактирования профиля
const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('#editProfile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const inputNameField = document.querySelector('.popup__input_user_name');
const inputJobField = document.querySelector('.popup__input_user_job');

const validationPropertiesObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

//Секция профиля
const userName = document.querySelector('.profile__info-title');
const userJob = document.querySelector('.profile__subtitle');
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');

//Секция карточек
const cardsContainer = document.querySelector('.elements__card');

//Попап добавления карточки
const popupAddCard = document.querySelector('#popupAddCard');
const addCardForm = popupAddCard.querySelector('.popup__form');
const inputCardDescription = document.querySelector('#card-description');
const inputPictureLink = document.querySelector('#picture-link');

//Попап просмотра увеличенного изображения
const modalImage = document.querySelector('#popupImage');
const popupImage = document.querySelector('.popup__picture');
const popupTitle = document.querySelector('.popup__image-title');

export {initialCards, popups, popupEditProfile, buttonOpenEditProfilePopup, 
  formEditProfile, inputNameField, inputJobField, validationPropertiesObject,
  userName, userJob, popupAddCardButtonOpen, cardsContainer, popupAddCard, addCardForm,
  inputCardDescription, inputPictureLink, modalImage, popupImage, popupTitle};