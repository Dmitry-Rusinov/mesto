const buttonPopupOpen = document.querySelector('.profile__edit-button');
/*const popup = document.querySelector('.popup');*/
const popupEditForm = document.getElementById('editForm');
const buttonPopupClosed = document.querySelector('.popup__closed');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_user_name');
const jobInput = document.querySelector('.popup__input_user_job');
const newNameInput = document.querySelector('.profile__info-title');
const newJobInput = document.querySelector('.profile__subtitle');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened');

buttonPopupOpen.addEventListener('click', () => {
  togglePopupState(popupEditForm);
  nameInput.value = newNameInput.textContent;
  jobInput.value = newJobInput.textContent;
});

buttonPopupClosed.addEventListener('click', () => {
togglePopupState(popupEditForm);
togglePopupState(popupAddCard);
});
/*popup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    togglePopupState(popup)
  }
})*/

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    newNameInput.textContent = nameInput.value;
    newJobInput.textContent = jobInput.value;
    /*togglePopupState(popupEditForm);*/
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

// Реализация загрузки карточек из JS
const elementsCard = document.querySelector('.elements__card');
const templateCard = document.querySelector('#template-card').content;

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

const elementsInfo = initialCards.map((item) => {
  return {
    name: item.name,
    link: item.link
  };
});

const deleteCard = (evt) => {
  const item = evt.target.closest('.elements__card-content');
  item.remove();
}

function createCard({name, link}) {
  const changedElements = templateCard.querySelector('.elements__card-content').cloneNode(true);
  changedElements.querySelector('.elements__title').textContent = name;
  changedElements.querySelector('.elements__picture').src = link;
  changedElements.querySelector('.elements__button-delete').addEventListener('click', deleteCard);
  elementsCard.prepend(changedElements);
}

function create() {
  elementsInfo.forEach(createCard);
}

create();

//Реализация формы добавления карточки
const popupAddButton = document.querySelector('.profile__add-button');
const cardDescription = document.getElementById('popup__input_card_description');
const picturesLink = document.getElementById('popup__input_pictures-link');
let newCardDescription = document.querySelector('.elements__title');
let newPicturesLink = document.querySelector('.elements__picture');
const popupAddCard = document.getElementById('add-card');

/*popupAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const todo = cardDescription.value;
  evt.target.closest('.elements__card-content');
});*/


popupAddButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  /*const todo = cardDescription.value;
  const link = picturesLink.value;
  createCard(todo, link);*/
  togglePopupState(popupAddCard);
  //newCardDescription.textContent = cardDescription.value;
  //newPicturesLink.textContent = picturesLink.value;
  
});

buttonPopupClosed.addEventListener('click', (evt) => togglePopupState(popupAddCard));

/*const addItem = (evt) => {
  const item = evt.target.closest('.elements__card-content');
  const cardDescription = item.querySelector('.popup__input_card_description').innerText;
  addCardSubmit();
}*/

function addCardSubmit (evt) {
  evt.preventDefault(); 
  const todo = cardDescription.value;
  const link = picturesLink.value;
  createCard(todo, link);
  /*newCardDescription.textContnt = cardDescription.value;
  newPicturesLink.textContnt = picturesLink.value;*/
  togglePopupState(popupAddCard);

}

formElement.addEventListener('submit', addCardSubmit);


