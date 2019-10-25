'use strict';
let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');
let modal = document.getElementById('modal');

openModal.onclick=function(event){
  event.preventDefault();
  modal.style.display='block';
};
closeModal.onclick=function(event){
  event.preventDefault();
  let modal=document.getElementById('modal');
  modal.style.display='none';
};
window.onclick=function(event){
  if(event.target===modal){
    modal.style.display='none';
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


let ok=document.querySelector('.ok');
let edit=document.querySelector('.edit');
let del=document.querySelector('.del');
let showConfig=document.querySelector('.showConfig');



createTask.onclick=function (event) {
  event.preventDefault();
  event.stopPropagation();

  item__title.innerText=title.value;
  item__description.innerText=description.value;
  item__prior.innerText=item__priority.value;
  tasks__item.style.display='block';
  let modal=document.getElementById('modal');
  modal.style.display='none';
  let tasks__item2= tasks__item.cloneNode(true);
  tasks__item2.querySelector('h2').innerHTML='NEW ITEM2';
  tasks__item.after(tasks__item2);
/*
  alert(event);
  alert(title.value);
  alert(description.value);
  alert(item__priority.options[item__priority.selectedIndex].text);
  alert(142);
*/
};
showConfig.onclick=function(event){
  event.preventDefault();
  let showPop=document.querySelector('.showPop');
  showPop.style.display='block';
};
window.onclick=function(event){
  event.preventDefault();
  if(event.target!==showConfig){
    showPop.style.display='none';
  }
};



let showPop=document.querySelector('.showPop');


ok.onclick=function(event){
  event.preventDefault();
  showPop.setAttribute('style', 'display: none ;');
  tasks__item.style.backgroundColor="blue";//rework event
  event.stopPropagation();

};
edit.onclick=function(event){
  event.preventDefault();
  event.stopPropagation();
  let showPop=document.querySelector('.showPop');
  showPop.setAttribute('style', 'display: none ;');
  modal.style.display='block';
};
del.onclick=function(event){
  event.preventDefault();
  event.stopPropagation();
  tasks__item.style.display='none';
};



/*let tasks__item2= tasks__item.cloneNode(true);
tasks__item2.querySelector('h2').innerHTML='NEW ITEM2';
tasks__item.after(tasks__item2);*/
