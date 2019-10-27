'use strict';
let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');
let modal = document.getElementById('modal');

let task = document.getElementById('createTask');

openModal.onclick = function (event) {
  event.preventDefault();
  task.dataset.condition="create";

  modal.style.display = 'block';

};
closeModal.onclick = function (event) {
  event.preventDefault();

  let modal = document.getElementById('modal');
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
