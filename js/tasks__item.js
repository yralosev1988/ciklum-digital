'use strict';
let createTask = document.getElementById('createTask');//кнопка создания или изменения задачи взависимости от флага

let tasks = document.getElementById('tasks'); //контейнер для списка задач
let title = document.getElementById('title'); //title из модального окна
let description = document.getElementById('description');//description из модального окна
let priority = document.getElementById('priority');//priority из модального окна

let showPop=document.querySelector('.showPop');



//глобальные переменные для хранения состояния this
let currentThisObjNode;
let item__title;
let item__description;
let item__prior;

//value of input


createTask.onclick=function(event){

  let titleValue=title.value;//значение title из модального окна
  let descriptionValue=description.value;//значение description из модального окна
  let priorityValue=priority.value;//значение priority из модального окна
  //task item html для динамиического добавления
  let taskNode=`<div class="tasks__item" data-id="open">
    <h2 class="item__title">${titleValue}</h2>
  <p class="item__description">${descriptionValue}</p>
  <div class="wrapper grid2">
  <div class="item__prior">${priorityValue}</div>
  <div class="showConfig">
  <div class="showPop">
  <div class="ok">done</div>
  <div class="edit">edit</div>
  <div class="del">delete</div>
  </div>
  </div>
  </div>
  </div>`;

  if(task.dataset.condition ==='create'){
    event.preventDefault();
    tasks.insertAdjacentHTML("beforeend", taskNode);
    modal.style.display = 'none';
  }
  if(task.dataset.condition ==='save') {
    event.preventDefault();
    item__title.innerHTML=titleValue;
    item__description.innerHTML=descriptionValue;
    item__prior.innerHTML=priorityValue;
    modal.style.display = 'none';
  }
};

tasks.onclick = function (event) {
  if (event.target.className === "showConfig") {
    tasks.querySelectorAll('.showPop').forEach(element=>{element.style.display="none"});
    event.target.querySelector('.showPop').setAttribute('style', 'display: block ;');

  }
  if (event.target.className === "ok") {
    event.preventDefault();
    event.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "blue";
    event.target.parentNode.parentNode.parentNode.parentNode.dataset.id= 'done';
    //rework event
    event.target.parentNode.parentNode.querySelector('.showPop').setAttribute('style', 'display: none ;');
  }
  if (event.target.className === "del") {
    event.preventDefault();
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
    event.target.parentNode.parentNode.querySelector('.showPop').setAttribute('style', 'display: none ;');
  }
  if (event.target.className === "edit") {
    event.preventDefault();
    task.dataset.condition='save';//установка флага

    //отслеживаю на каком обьекте задач был клик и записываю в глобальную переменную текущие значения полей
    currentThisObjNode=event.target.parentNode.parentNode.parentNode.parentNode;
    item__title = currentThisObjNode.querySelector('.item__title');
    item__description = currentThisObjNode.querySelector('.item__description');
    item__prior=currentThisObjNode.querySelector('.item__prior');
    //записываю в текущее модальное окно поля из глобальной переменной
    title.innerHTML=item__title.innerHTML;
    description.innerHTML=item__description.innerHTML;

    event.target.parentNode.parentNode.querySelector('.showPop').setAttribute('style', 'display: none ;');

    modal.style.display='block';
  }
};


//filter
//получаю массив ассоциативных обьектов с полем приоритета
/*
let selectPriority=document.getElementById('priorityFilter');

let ARRAY=document.querySelectorAll(".item__prior");
  selectPriority.onchange= function(event){
  ARRAY=document.querySelectorAll(".item__prior");

  ARRAY.forEach(element=>{
    if(element.innerHTML===selectPriority.value || selectPriority.value==='all'){
      element.parentNode.parentNode.style.display="block";
    }
    /!*if(selectPriority.value==='all'){
      alert('all');
    }*!/
    else {
      element.parentNode.parentNode.style.display = "none"
    }})

};



let statusFilter=document.getElementById('statusFilter');
statusFilter.onchange= function(event){
  let ARRAY=document.querySelectorAll(".tasks__item");
  ARRAY.forEach(element=>{
    if(statusFilter.value===element.dataset.id || statusFilter.value==='all'){
      element.style.display="block";
    }else{
      element.style.display="none";

    }
    /!*if(selectPriority.value==='all'){
      alert('all');
    }*!/
    /!*else {
      element.parentNode.parentNode.style.display = "none"
    }*!/
  })

};
let searchFilter= document.getElementById('searchFilter');
  searchFilter.onchange= function (event) {
  let ARRAY=document.querySelectorAll(".item__title");
  ARRAY.forEach(element=>{
    if(element.innerHTML.includes(searchFilter.value)){
      element.parentNode.style.display="block";
    }
    else {
      element.parentNode.style.display = "none"
    }
  });
};

*/


//NEW FILTER
let searchFilter=document.getElementById("searchFilter");
let statusFilter=document.getElementById('statusFilter');
let priorityFilter=document.getElementById('priorityFilter');

function filter(){
  let ARRAY=document.querySelectorAll(".tasks__item");
  //get value of input
  /*
    let searchFilter=document.getElementById("searchFilter");
  */
  let searchValue=searchFilter.value;
  //get value of status select
  /*
    let statusFilter=document.getElementById('statusFilter');
  */
  let statusValue=statusFilter.value;
  //get value of priority select
  /*
    let priorityFilter=document.getElementById('priorityFilter');
  */
  let priorityValue=priorityFilter.value;
  //get values to compare with selects and inputs



  ARRAY.forEach(element=>{
    //each element in array compare with values in tasks
    if(element.querySelector('.item__title').innerHTML.includes(searchValue) &&
      (element.dataset.id === statusValue || statusValue === 'all') &&
      (element.querySelector('.item__prior').innerHTML === priorityValue || priorityValue==='all'))
    {
      //do something
      element.style.display="block";
    } else {
      element.style.display="none";
    }
  })
}

//
searchFilter.oninput=filter;
statusFilter.onchange=filter;
priorityFilter.onchange=filter;
