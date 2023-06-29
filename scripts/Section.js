export default class Section {
  constructor({items, renderer}, elementsContainer) {
    this._cardContainer = document.querySelector(elementsContainer);
    this._initialArray = items;
    this._renderer = renderer;
  }

  renderer() {
    this._initialArray.forEach( item => this._renderer(item));
  }

  addItem(element) {
    this._cardContainer.prepend(element);
  }
}