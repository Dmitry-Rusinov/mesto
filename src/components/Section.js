export default class Section {
  constructor({renderer}, elementsContainer) {
    this._cardContainer = document.querySelector(elementsContainer);
    this._renderer = renderer;
  }

  renderer(arr) {
  arr.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._cardContainer.prepend(element);
  }
}