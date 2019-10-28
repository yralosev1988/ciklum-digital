'use strict';
class Task {
  constructor(title,description,priority) {
    this.title = title;
    this.description=description;
    this.priority=priority;
    this.flag="true";
  }
  isDone() {
    console.log(this.flag);
  }
  render(){

  }

}
// Использование:
let task1 = new Task("Иван","description", "prio" );
let task2 = new Task("Ива","description", "prio" );

console.log(task1);
console.log(task2);
