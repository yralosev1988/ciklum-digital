import '../scss/app.scss';

const createTaskInModal = document.getElementById('createTaskInModal');// button witch create task in modal
const closeModal = document.getElementById('closeModal');// button witch close modal
const modal = document.getElementById('modal');// modal
const createTask = document.getElementById('createTask');// button witch create/save task depending on flag create/save in dataset
const searchFilter = document.getElementById('searchFilter');
const statusFilter = document.getElementById('statusFilter');
const priorityFilter = document.getElementById('priorityFilter');
const tasks = document.getElementById('tasks'); // element to render tasks
const titleModal = document.getElementById('title'); // title from modal
const titleDescription = document.getElementById('description');// description modal
const titlePriority = document.getElementById('priority');// priority from modal

// global variables to save values from targ obj
let itemTitle;
let itemDescription;
let itemPrior;

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

// set flag "create"/"save"
function setFlag(flag) {
  createTask.dataset.condition = flag;
}

function filter() {
  // get ARRAY with tasks DOM-objects
  const ARRAY = document.querySelectorAll('.tasks__item');
  // get value of input
  const searchValue = searchFilter.value;
  // get value of status select
  const statusValue = statusFilter.value;
  // get value of priority select
  const priorityValue = priorityFilter.value;
  // get values to compare with selects and inputs
  ARRAY.forEach((element) => {
    const elem = element;
    // each element in array compare with values in tasks
    if (elem.querySelector('.itemTitle')
      .innerHTML
      .includes(searchValue)
            && (elem.dataset.id === statusValue || statusValue === 'all')
            && (elem.querySelector('.itemPrior').innerHTML === priorityValue || priorityValue === 'all')) {
      // do something
      elem.style.display = 'block';
    } else {
      elem.style.display = 'none';
    }
  });
}

function createTaskInModalCallback(event) {
  event.preventDefault();
  showModal();
  setFlag('create');
  titleModal.value = ''; // title value from modal
  titleDescription.value = '';// description value from modal
}

function closeModalCallback(event) {
  event.preventDefault();
  hideModal();
}

function createTaskCallback(event) {
  event.preventDefault();
  const titleModalValue = titleModal.value || 'title'; // title value from modal
  const descriptionModalValue = titleDescription.value || 'description';// description value from modal
  const priorityModalValue = titlePriority.value;// priority value from modal
  // task item view to dynamic add in dom
  const taskNode = `<div class="tasks__item" data-id="open">
<div class="complete"></div>
    <h2 class="itemTitle">${titleModalValue}</h2>
  <p class="itemDescription">${descriptionModalValue}</p>
  <div class="wrapper">
  <div class="itemPrior">${priorityModalValue}</div>
  <div class="showConfig">...
  <div class="showPop">
  <div class="ok">done</div>
  <div class="edit">edit</div>
  <div class="del">delete</div>
  </div>
  </div>
  </div>
  </div>`;
  if (createTask.dataset.condition === 'create') {
    // create in DOM new task
    tasks.insertAdjacentHTML('beforeend', taskNode);
  }
  if (createTask.dataset.condition === 'save') {
    // change task view
    itemTitle.textContent = titleModalValue;
    itemDescription.textContent = descriptionModalValue;
    itemPrior.textContent = priorityModalValue;
  }
  hideModal();
}

function tasksCallback(event) {
  const { target } = event;
  event.preventDefault();
  if (target.className === 'showConfig') {
    tasks.querySelectorAll('.showPop')
      .forEach((element) => {
        const elem = element;
        elem.style.display = 'none';
      });// hide configModal if clicking on another edit button
    target.querySelector('.showPop').style.display = 'block';
  }
  if (target.className === 'ok') {
    target.closest('.tasks__item').style.backgroundColor = 'lightpink';
    target.closest('.tasks__item').querySelector('.complete').style.display = 'block';
    target.closest('.tasks__item').querySelector('.ok').style.display = 'none';
    target.closest('.tasks__item').dataset.id = 'done';
    // rework event
  }
  if (target.className === 'del') {
    target.closest('.tasks__item')
      .remove();
  }
  if (target.className === 'edit') {
    setFlag('save');
    // looking for target obj and set values in global
    itemTitle = target.closest('.tasks__item')
      .querySelector('.itemTitle');
    itemDescription = target.closest('.tasks__item')
      .querySelector('.itemDescription');
    itemPrior = target.closest('.tasks__item')
      .querySelector('.itemPrior');
    // записываю в текущее модальное окно поля из глобальной переменной
    titleModal.value = itemTitle.textContent;
    titleDescription.value = itemDescription.textContent;
    showModal();
  }
  if (target.className === 'complete') {
    target.closest('.tasks__item').style.backgroundColor = 'lightgrey';
    target.closest('.tasks__item').querySelector('.complete').style.display = 'none';
    target.closest('.tasks__item').querySelector('.ok').style.display = 'block';
    target.closest('.tasks__item').dataset.id = 'undone';
  }
  target.closest('.showPop').style.display = 'none';
}

function closeModals(event) {
  event.preventDefault();
  if (event.target === modal) {
    hideModal();
  } else if (event.target.className !== 'showConfig') {
    document.querySelectorAll('.showPop')
      .forEach((element) => {
        const elem = element;
        elem.style.display = 'none';
      });
  }
}

// listener to show modal and set flag "create"
createTaskInModal.addEventListener('click', createTaskInModalCallback);
createTask.addEventListener('click', createTaskCallback);
tasks.addEventListener('click', tasksCallback);
searchFilter.addEventListener('input', filter);
statusFilter.addEventListener('change', filter);
priorityFilter.addEventListener('change', filter);
// listener to close modal by click on button
closeModal.addEventListener('click', closeModalCallback);
window.addEventListener('click', closeModals);
