let createTask = document.getElementById('createTask');
let editTask = document.querySelector('editTask');


let tasks = document.getElementById('tasks');

/*
let task = document.getElementById('task');
*/
let currentThisObjNode;
let item__title;
let item__description;
let item__prior;



//value of input


createTask.onclick=function(event){
  if(task.dataset.condition ==='create'){
    let grid = document.querySelector('.grid');

    let item__title = document.querySelector('.item__title');
    let item__description = document.querySelector('.item__description');
    let item__prior = document.querySelector('.item__prior');
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let item__priority = document.getElementById('item__priority');
    let titleValue=title.value;
    let descriptionValue=description.value;
    let priorityValue=item__priority.value;
    let taskNode=`<div class="tasks__item">
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
    grid.insertAdjacentHTML("beforeend", taskNode);
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
    event.preventDefault();
    event.stopPropagation();
  }
  if(task.dataset.condition ==='save') {
    alert(this);
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let item__priority = document.getElementById('item__priority');
    let titleValue=title.value;
    let descriptionValue=description.value;
    let priorityValue=item__priority.value;
    item__title.innerHTML=titleValue;
    item__description.innerHTML=descriptionValue;
    item__prior.innerHTML=priorityValue;


    let modal = document.getElementById('modal');
    modal.style.display = 'none';
    event.preventDefault();
    event.stopPropagation();

  }
};

/*
window.onclick= function(event){
  if (event.target.className !== "showConfig") {
    grid.querySelector('.showPop').setAttribute('style', 'display: none ;');

  }

/!*
  grid.querySelector('.showPop').setAttribute('style', 'display: none ;');
*!/
};
*/

let grid = document.querySelector('.grid');
grid.onclick = function (event) {
  /*event.preventDefault();*/
  if (event.target.className === "showConfig") {

    tasks.querySelectorAll('.showPop').forEach(element=>{element.style.display="none"});
    event.target.querySelector('.showPop').setAttribute('style', 'display: block ;');

  }

  if (event.target.className === "ok") {
    let showPop = document.querySelector('.showPop');
    let tasks__item = document.querySelector('.tasks__item');
    event.preventDefault();
    /*showPop.setAttribute('style', 'display: none ;');
    */event.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "blue";//rework event
    event.stopPropagation();
  }
  if (event.target.className === "del") {
    event.preventDefault();
    event.stopPropagation();
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
  }
  if (event.target.className === "edit") {
    event.preventDefault();
    event.stopPropagation();

    task.dataset.condition='save';

    currentThisObjNode=event.target.parentNode.parentNode.parentNode.parentNode;
    item__title = currentThisObjNode.querySelector('.item__title');
    item__description = currentThisObjNode.querySelector('.item__description');
    item__prior=currentThisObjNode.querySelector('.item__prior');
    alert(item__title.innerHTML);

    let title = document.getElementById('title');
    let description = document.getElementById('description');
    title.innerHTML=item__title.innerHTML;
    description.innerHTML=item__description.innerHTML;


    let showPop=document.querySelector('.showPop');
    showPop.setAttribute('style', 'display: none ;');
    modal.style.display='block';
  }
};


