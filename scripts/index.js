import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './constants.js';

//Попап редактирования профиля
const popupEditProfile = document.querySelector('#editProfile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const inputNameField = document.querySelector('.popup__input_user_name');
const inputJobField = document.querySelector('.popup__input_user_job');
const buttonCloseEditProfilePopup = popupEditProfile.querySelector('.popup__closed');

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
const buttonSubmitForm = popupAddCard.querySelector('.popup__submit');
const popupAddCardButtonClosed = popupAddCard.querySelector('.popup__closed');

//Попап просмотра увеличенного изображения
const modalImage = document.querySelector('#popupImage');
const modalImageButtonClosed = modalImage.querySelector('.popup__closed');

//Открывает попап и добавляет слушатель кнопки Esc
const openPopup = (popupOpened) => {
  popupOpened.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseByEsc);
};

//Закрывает попап и удаляет слушатель кнопки Esc
const closePopup = (popupClosed) => {
  popupClosed.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseByEsc);
};

//Слушатель на кнопке открытия попапа профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputNameField.value = userName.textContent;
  inputJobField.value = userJob.textContent;
});

//Слушатель на кнопке закрытия попапа профиля
buttonCloseEditProfilePopup.addEventListener('click', () => closePopup(popupEditProfile));

//Функция редактирования полей формы попапа профиля
function submitEditProfileForm (evt) {
    evt.preventDefault(); 
    userName.textContent = inputNameField.value;
    userJob.textContent = inputJobField.value;
    closePopup(popupEditProfile);
}

//Слушатель сабмита на форме попапа профиля
formEditProfile.addEventListener('submit', submitEditProfileForm);

//Функция наполнения карточки
function createCard(data) {
  const cardContent = new Card(data, '.card-template');
  const cardElement = cardContent.generateCard();
  return cardElement;
}

//Функция добавления карточки на страницу
function renderCard(card) {
  cardsContainer.prepend(card);
}

//Функция добавления карточек из JS
function renderInitialCards() {
  initialCards.forEach((card) => {
    const cardContent = createCard(card);
    renderCard(cardContent);
  });
}

renderInitialCards();

//Слушатель на кнопку отрытия попапа добавления карточки
popupAddCardButtonOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
});

//Слушатель на кнопку закрытия попапа добавления карточки
popupAddCardButtonClosed.addEventListener('click', () => closePopup(popupAddCard));

//Функция добавления карточки
function submitAddCard (evt) {
  evt.preventDefault();
  const objInputs = {
    name: inputCardDescription.value,
    link: inputPictureLink.value
  };
  const card = createCard(objInputs);
  buttonSubmitForm.setAttribute('disabled', true);
  renderCard(card);
  closePopup(popupAddCard);
  evt.target.reset();
}

//Слушатель сабмита на форме попапа добавления карточки 
addCardForm.addEventListener('submit', submitAddCard);

//Солушатель кнопки закрытия модального окна изображения
modalImageButtonClosed.addEventListener('click', () => closePopup(modalImage));

//Функция отслеживает закрытие модального окна по нажатию кнопку Esc
function handleCloseByEsc (evt) {
  if (evt.key === 'Escape') {
    const modal = document.querySelector('.popup_opened');
    closePopup(modal);
  }
}

//Функция отслеживание закрытие модального окна по клику на оверлей
const handleClickByOverlay = (evt) => {
  if (evt.currentTarget === evt.target) { 
    closePopup(evt.currentTarget);
  }
}

const popupList = Array.from(document.querySelectorAll('.popup'));

popupList.forEach((popup) => {
  popup.addEventListener('click', handleClickByOverlay)
});

//Валидация формы редактирования профиля
const formEditProfileValidation = new FormValidator(validationPropertiesObject, formEditProfile);
formEditProfileValidation.enableValidation();

//Валидация формы добавления карточки
const addCardFormValidation = new FormValidator(validationPropertiesObject, addCardForm);
addCardFormValidation.enableValidation();
