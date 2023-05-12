const buttonPopupOpen = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonPopupClosed = document.querySelector('.popup__closed');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_user_name');
let jobInput = document.querySelector('.popup__input_user_job');
let newNameInput = document.querySelector('.profile__info-title');
let newJobInput = document.querySelector('.profile__subtitle');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened');

buttonPopupOpen.addEventListener('click', () => {
  togglePopupState(popup);
  nameInput.value = newNameInput.textContent;
  jobInput.value = newJobInput.textContent;
});

buttonPopupClosed.addEventListener('click', () => togglePopupState(popup));
/*popup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    togglePopupState(popup)
  }
})*/

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    newNameInput.textContent = nameInput.value;
    newJobInput.textContent = jobInput.value;
    togglePopupState(popup);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

const elementsCard = document.querySelector('.elements__card');
const elementsCardContent = document.querySelector('.elements__card-content').content;
//const elementsPicture = document.querySelector('.elements__picture');
//const elementsTitle = document.querySelector('.elements__title');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementsInfo = initialCards.map((item) => {
  return {
    name: item.name,
    link: item.link
  };
});

console.log(elementsInfo)

//const changedElements = elementsCard.querySelector('.elements__card-content').cloneNode(true);
function createCard({name, link}) {
  const changedElements = elementsCard.querySelector('.elements__card-content').cloneNode(true);
  changedElements.querySelector('.elements__title').textContent = name;
  changedElements.querySelector('.elements__picture').src = link;
  elementsCard.replaceWith(changedElements);
}

console.log(createCard({name, link}))

function create() {
  elementsInfo.forEach(createCard);
}

create();