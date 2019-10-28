'use strict';
let createTaskInModal = document.getElementById('createTaskInModal');//кнопкка создания задачи в модальном окне
let closeModal = document.getElementById('closeModal');//кнопка закрытия модального окна
let modal = document.getElementById('modal');//модальное окно
let task = document.getElementById('createTask');//кнопка создания или изменения задачи взависимости от флага

//отображение модального окна кнопкой create и устанавливаю флаг
// для определения откуда будет нажат submit

createTaskInModal.onclick = function (event) {
  event.preventDefault();
  task.dataset.condition="create";//устанавливаю флаг
  modal.style.display = 'block';
};

//закрытие модального окна кнопкой

closeModal.onclick = function (event) {
  event.preventDefault();
  modal.style.display = 'none';
};

//закрытие модального окна кликом на затемненный участок

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
