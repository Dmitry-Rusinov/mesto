//Попап оредактирования профиля
const buttonPopupOpen = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#editProfile');
const buttonPopupEditProfileClosed = document.querySelector('.popup__closed');
const formDataInput = popupEditProfile.querySelector('.popup__form');
const inputNameField = document.querySelector('.popup__input_user_name');
const inputJobField = document.querySelector('.popup__input_user_job');
const userName = document.querySelector('.profile__info-title');
const userJob = document.querySelector('.profile__subtitle');
const elementsCard = document.querySelector('.elements__card');
const templateCard = document.querySelector('#template-card').content;
const popupAddCardButtonOpen = document.querySelector('.profile__add-button');
const inputCardDescription = document.querySelector('#card-description');
const inputPictureLink = document.querySelector('#picture-link');
const popupAddCard = document.querySelector('#popupAddCard');
const popupAddCardButtonClosed = popupAddCard.querySelector('.popup__closed');
const addCardForm = popupAddCard.querySelector('.popup__form');
const modalImage = document.querySelector('#popupImage');
const modalImageButtonClosed = modalImage.querySelector('.popup__closed');
const image = modalImage.querySelector('.popup__picture');
const imageTitle = modalImage.querySelector('.popup__image-title');

//Реализация формы редактирования профиля

const openPopup = (popupOpened) => popupOpened.classList.add('popup_opened');

const closePopup = (popupClosed) => popupClosed.classList.remove('popup_opened');

buttonPopupOpen.addEventListener('click', () => {
  //togglePopupState(popupEditProfile);
  openPopup(popupEditProfile);
  inputNameField.value = userName.textContent;
  inputJobField.value = userJob.textContent;
});

buttonPopupEditProfileClosed.addEventListener('click', () => closePopup(popupEditProfile));

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    userName.textContent = inputNameField.value;
    userJob.textContent = inputJobField.value;
    closePopup(popupEditProfile);
}

formDataInput.addEventListener('submit', handleFormSubmit);

// Реализация загрузки карточек из JS
const elementsInfo = initialCards.map((item) => {
  return {
    name: item.name,
    link: item.link
  };
});
//Кнопка удаления карточки
const buttonDeleteCard = (evt) => {
  const item = evt.target.closest('.elements__card-content');
  item.remove();
}
//Кнопка лайка карточки
const buttonLikeCard = (evt) => {
  const item = evt.target.closest('.elements__button-like');
  item.classList.toggle('elements__button-like_active');
}
//Функция наполнения карточки
function prepareCardContent(title, link, description) { 
  const listElements  = templateCard.querySelector('.elements__card-content').cloneNode(true);
  const elementsPicture = listElements.querySelector('.elements__picture');
  const elementsTitle = listElements.querySelector('.elements__title');
  elementsTitle.textContent = title;
  elementsPicture.src = link;
  elementsPicture.alt = description;
  listElements.querySelector('.elements__button-delete').addEventListener('click', buttonDeleteCard );
  listElements.querySelector('.elements__button-like').addEventListener('click', buttonLikeCard);
  elementsPicture.addEventListener('click', () => {
    openPopup(modalImage);
    image.src = elementsPicture.src;
    image.alt = elementsPicture.alt;
    imageTitle.textContent = elementsTitle.textContent;
  });
  return listElements;
}

//Функция добавления карточек из JS
function handleCreateCard() {
  elementsInfo.forEach((card) => {
    const cardContent = prepareCardContent(card.name, card.link, card.name);
    elementsCard.prepend(cardContent);
  });
}

handleCreateCard();

popupAddCardButtonOpen.addEventListener('click', () => {
  openPopup(popupAddCard);
});

popupAddCardButtonClosed.addEventListener('click', () => closePopup(popupAddCard));

//Функция добавления карточки
function submitAddCard (evt) {
  evt.preventDefault();
  const cardContentAdd = prepareCardContent(inputCardDescription.value, inputPictureLink.value, inputCardDescription.value);
  elementsCard.prepend(cardContentAdd);
  closePopup(popupAddCard);
  evt.target.reset();
}

addCardForm.addEventListener('submit', submitAddCard);

//Кнопка закрытия модального окна изображения
modalImageButtonClosed.addEventListener('click', () => closePopup(modalImage));