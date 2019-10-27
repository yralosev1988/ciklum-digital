'use strict';
window.onload=function() {
  let openModal = document.getElementById('openModal');
  let closeModal = document.getElementById('closeModal');
  let modal = document.getElementById('modal');

  openModal.onclick = function (event) {
    event.preventDefault();
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


  let createTask = document.getElementById('createTask');
  let title = document.getElementById('title');
  let description = document.getElementById('description');
  let item__priority = document.getElementById('item__priority');

  let tasks__item = document.querySelector('.tasks__item');
  let item__title = document.querySelector('.item__title');
  let item__description = document.querySelector('.item__description');
  let item__prior = document.querySelector('.item__prior');


  let ok = document.querySelector('.ok');
  let edit = document.querySelector('.edit');
  let del = document.querySelector('.del');
  let grid = document.querySelector('.grid');
  let showConfig = document.querySelector('.showConfig');
  let toDoList = [];


  createTask.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();


    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let item__priority = document.getElementById('item__priority');


    let temp = {};
    temp.title = title.value;
    temp.description = description.value;
    temp.priority = item__priority.value;
    temp.check = false;

    let i = toDoList.length;
    toDoList[i] = temp;
    console.log(toDoList);
    out();

    function out() {
      let out = '';
      for (let key in toDoList) {
        out += `<div class="tasks__item">
    <h2 class="item__title">${toDoList[key].title}</h2>
  <p class="item__description">${toDoList[key].description}</p>
  <div class="wrapper grid2">
  <div class="item__prior">${toDoList[key].priority}</div>
  <div class="showConfig">
  <div class="showPop">
  <div class="ok">done</div>
  <div class="edit">edit</div>
  <div class="del">delete</div>
  </div>
  </div>
  </div>
  </div>`;
      }
      document.getElementById('grid').innerHTML = out;
    }


    let modal = document.getElementById('modal');
    modal.style.display = 'none';

  };
  grid.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.className === "showConfig") {
      let showPop = document.querySelector('.showPop');
      showPop.setAttribute('style', 'display: block ;');
    }
    if (event.target.className === "ok") {
      let showPop = document.querySelector('.showPop');
      let tasks__item = document.querySelector('.tasks__item');
      event.preventDefault();
      showPop.setAttribute('style', 'display: none ;');
      tasks__item.style.backgroundColor = "blue";//rework event
      event.stopPropagation();
    }
    if (event.target.className === "dell") {
      event.preventDefault();
      event.stopPropagation();
      tasks__item.remove();
    }

  };
  window.onclick = function (event) {
    event.preventDefault();
    if (event.target !== showConfig) {
      /*showPop.style.display='none';*/
    }
  };
};




/*edit.onclick=function(event){
  event.preventDefault();
  event.stopPropagation();
  let showPop=document.querySelector('.showPop');
  showPop.setAttribute('style', 'display: none ;');
  modal.style.display='block';
};*/
