'use strict';

// Функция-конструктор студента
function Student(name, gender, age) {
  this.name = name;      // имя студента
  this.gender = gender;  // пол студента
  this.age = age;        // возраст
  this.marks = [];       // массив оценок
}

// Метод для установки предмета
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.marks) return; // если студента отчислили — ничего не делаем
  for (let i = 0; i < marksToAdd.length; i++) {
    this.marks.push(marksToAdd[i]);
  }
};

// Метод для вычисления среднего балла
Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
};

// Метод для отчисления студента
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

