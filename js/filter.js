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
      element.dataset.id === statusValue &&
      element.querySelector('.item__prior').innerHTML === priorityValue){
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
