'use strict';
let showPopup = document.getElementById('showPopup');
let hidePopup = document.getElementById('hidePopup');
let createTask = document.getElementById('createTask');
let title = document.getElementById('title');
let description = document.getElementById('description');
let item__priority = document.getElementById('item__priority');

let tasks = document.getElementById('tasks');
let item__title = document.getElementById('item__title');
let item__description = document.getElementById('item__description');
let item__prior = document.getElementById('item__prior');
let ok=document.getElementById('ok');
let edit=document.getElementById('edit');
let del=document.getElementById('del');
let hidePop=document.getElementById('hidePop');

showPopup.onclick=function(event){
  event.preventDefault();
  let popup=document.getElementById('popup');
  popup.style.display='block';
};
hidePopup.onclick=function(event){
  event.preventDefault();
  let popup=document.getElementById('popup');
  popup.style.display='none';
};

createTask.onclick=function (event) {
  event.preventDefault();
  item__title.innerText=title.value;
  item__description.innerText=description.value;
  item__prior.innerText=item__priority.value;
  tasks.style.display='block';
  let popup=document.getElementById('popup');
  popup.style.display='none';
/*
  alert(event);
  alert(title.value);
  alert(description.value);
  alert(item__priority.options[item__priority.selectedIndex].text);
  alert(142);
*/
};
hidePop.onclick=function(event){
  event.preventDefault();
  let showPop=document.getElementById('showPop');

  showPop.style.display='block';

};
ok.onclick=function(event){
  event.preventDefault();
  event.stopPropagation();
  let showPop=document.getElementById('showPop');

  showPop.setAttribute('style', 'display: none ;');

  tasks.style.backgroundColor='blue';

};
edit.onclick=function(event){
  event.preventDefault();
  event.stopPropagation();
  let showPop=document.getElementById('showPop');
  showPop.setAttribute('style', 'display: none ;');
  let popup=document.getElementById('popup');
  popup.style.display='block';
};
del.onclick=function(event){
  event.preventDefault();
  event.stopPropagation();
  tasks.style.display='none';
};

