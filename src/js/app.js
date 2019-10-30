import '../scss/app.scss';

// Your JS Code goes here
'use strict';
let createTaskInModal = document.getElementById('createTaskInModal');//button witch create task in modal
let closeModal = document.getElementById('closeModal');//button witch close modal
let modal = document.getElementById('modal');//modal
let createTask = document.getElementById('createTask');//button witch create/save task depending on flag create/save in dataset

//listener to show modal and set flag "create"

createTaskInModal.addEventListener('click', function (event) {
  event.preventDefault();
  showModal();
  setFlag('create');
});

function showModal() {
  modal.style.display = 'block';
}

//set flag "create"/"save"
function setFlag(flag) {
  createTask.dataset.condition = flag;
}

//listener to close modal by click on button

closeModal.addEventListener('click', function (event) {
  event.preventDefault();
  hideModal();
});

function hideModal() {
  modal.style.display = 'none';
}

//listener to close modal by click on dark layout

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    hideModal();
  }
});


//kajsdkashdk

let tasks = document.getElementById('tasks'); //element to render tasks
let titleModal = document.getElementById('title'); //title from modal
let titleDescription = document.getElementById('description');//description modal
let titlePriority = document.getElementById('priority');//priority from modal

let showPop = document.querySelector('.showPop');


//глобальные переменные для хранения состояния this
let item__title;
let item__description;
let item__prior;

//value of input


createTask.addEventListener('click', function (event) {
  event.preventDefault();
  let titleModalValue = titleModal.value; //title value from modal
  let descriptionModalValue = titleDescription.value;//description value from modal
  let priorityModalValue = titlePriority.value;//priority value from modal
  //task item view to dynamic add in dom

  let taskNode = `<div class="tasks__item" data-id="open">
    <h2 class="item__title">${titleModalValue}</h2>
  <p class="item__description">${descriptionModalValue}</p>
  <div class="wrapper grid2">
  <div class="item__prior">${priorityModalValue}</div>
  <div class="showConfig">
  <div class="showPop">
  <div class="ok">done</div>
  <div class="edit">edit</div>
  <div class="del">delete</div>
  </div>
  </div>
  </div>
  </div>`;
  if (createTask.dataset.condition === 'create') {
    //create in DOM new task
    tasks.insertAdjacentHTML('beforeend', taskNode);
  }
  if (createTask.dataset.condition === 'save') {
    //change task view
    item__title.textContent = titleModalValue;
    item__description.textContent = descriptionModalValue;
    item__prior.textContent = priorityModalValue;
  }
  hideModal();
});


tasks.addEventListener('click', function (event) {
  let target = event.target;

  event.preventDefault();
  if (target.className === 'showConfig') {
    tasks.querySelectorAll('.showPop')
      .forEach(element => {
        element.style.display = 'none';
      });//hide configModal if clicking on another edit button
    target.querySelector('.showPop').style.display = 'block';

  }
  if (target.className === 'ok') {
    target.closest('.tasks__item').style.backgroundColor = 'blue';
    target.closest('.tasks__item').dataset.id = 'done';
    //rework event

  }
  if (target.className === 'del') {
    target.closest('.tasks__item')
      .remove();
  }
  if (target.className === 'edit') {
    setFlag('save');

    //отслеживаю на каком обьекте задач был клик и записываю в глобальную переменную текущие значения полей

    item__title = target.closest('.tasks__item')
      .querySelector('.item__title');
    item__description = target.closest('.tasks__item')
      .querySelector('.item__description');
    item__prior = target.closest('.tasks__item')
      .querySelector('.item__prior');

    //записываю в текущее модальное окно поля из глобальной переменной

    titleModal.value = item__title.textContent;
    titleDescription.value = item__description.textContent;

    showModal();

  }
  target.closest('.showPop').style.display = 'none';
});


//NEW FILTER
let searchFilter = document.getElementById('searchFilter');
let statusFilter = document.getElementById('statusFilter');
let priorityFilter = document.getElementById('priorityFilter');

function filter() {
  //get ARRAY with tasks DOM-objects
  let ARRAY = document.querySelectorAll('.tasks__item');
  //get value of input
  /*
    let searchFilter=document.getElementById("searchFilter");
  */
  let searchValue = searchFilter.value;
  //get value of status select
  /*
    let statusFilter=document.getElementById('statusFilter');
  */
  let statusValue = statusFilter.value;
  //get value of priority select
  /*
    let priorityFilter=document.getElementById('priorityFilter');
  */
  let priorityValue = priorityFilter.value;
  //get values to compare with selects and inputs


  ARRAY.forEach(element => {
    //each element in array compare with values in tasks
    if (element.querySelector('.item__title')
        .innerHTML
        .includes(searchValue) &&
      (element.dataset.id === statusValue || statusValue === 'all') &&
      (element.querySelector('.item__prior').innerHTML === priorityValue || priorityValue === 'all')) {
      //do something
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

//
searchFilter.oninput = filter;
statusFilter.onchange = filter;
priorityFilter.onchange = filter;
