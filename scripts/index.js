import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import {initialCards} from './constants.js';

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
const buttonSubmitForm = popupAddCard.querySelector('.popup__submit');

//Попап просмотра увеличенного изображения
const modalImage = document.querySelector('#popupImage');
const popupImage = document.querySelector('.popup__picture');
const popupTitle = document.querySelector('.popup__image-title');

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
  formEditProfileValidation.resetValidation();
});

//Функция редактирования полей формы попапа профиля
function submitEditProfileForm (evt) {
    evt.preventDefault(); 
    userName.textContent = inputNameField.value;
    userJob.textContent = inputJobField.value;
    closePopup(popupEditProfile);
}

//Слушатель сабмита на форме попапа профиля
formEditProfile.addEventListener('submit', submitEditProfileForm);

//Функция открывает попап увеличенного изображения
function handleCardClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupTitle.textContent = name;
  openPopup(modalImage);
}

//Функция наполнения карточки
function createCard(data) {
  const cardContent = new Card(data, '.card-template', handleCardClick);
  const cardElement = cardContent.generateCard();
  return cardElement;
}

const cardList = new Section ({ items: initialCards, renderer: (data) => {
  cardList.addItem(createCard(data));
}
      /*(item) => {
      const cardContent = new Card(item, '.card-template', handleCardClick);
      const cardElement = cardContent.generateCard();
      cardList.addItem(cardElement);
  
} */
}, '.elements__card');

cardList.renderer();

//Функция добавления карточки на страницу
/*function renderCard(card) {
  cardsContainer.prepend(card);
}*/

//Функция добавления карточек из JS
/*function renderInitialCards() {
  initialCards.forEach((card) => {
    const cardContent = createCard(card);
    renderCard(cardContent);
  });
}

renderInitialCards();*/

//Слушатель на кнопку отрытия попапа добавления карточки
popupAddCardButtonOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
  addCardFormValidation.resetValidation();
});

//Функция добавления карточки
function submitAddCard (evt) {
  evt.preventDefault();
  const objInputs = {
    name: inputCardDescription.value,
    link: inputPictureLink.value
  };
  const card = createCard(objInputs);
  renderCard(card);
  closePopup(popupAddCard);
  evt.target.reset();
}

//Слушатель сабмита на форме попапа добавления карточки 
addCardForm.addEventListener('submit', submitAddCard);

//Функция отслеживает закрытие модального окна по нажатию кнопку Esc
function handleCloseByEsc (evt) {
  if (evt.key === 'Escape') {
    const modal = document.querySelector('.popup_opened');
    closePopup(modal);
  }
}

//Закрываем попап по клику на крестик/оверлей
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__closed')) {
          closePopup(popup)
        }
    })
});

//Валидация формы редактирования профиля
const formEditProfileValidation = new FormValidator(validationPropertiesObject, formEditProfile);
formEditProfileValidation.enableValidation();

//Валидация формы добавления карточки
const addCardFormValidation = new FormValidator(validationPropertiesObject, addCardForm);
addCardFormValidation.enableValidation();