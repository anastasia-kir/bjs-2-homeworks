'use strict';

// Функция-конструктор Student
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

// Метод для установки предмета
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function (...marksToAdd) {
  // если студента отчислили — marks нет
  if (!this.marks) {
    return;
  }

  for (let i = 0; i < marksToAdd.length; i += 1) {
    this.marks.push(marksToAdd[i]);
  }
};

// Метод для подсчёта среднего балла
Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < this.marks.length; i += 1) {
    sum += this.marks[i];
  }

  return sum / this.marks.length;
};

// Метод для отчисления студента
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

// ===== Примеры для самопроверки =====

let student1 = new Student('Василиса', 'женский', 19);
student1.setSubject('Algebra');
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student('Артём', 'мужской', 25);
student2.setSubject('Geometry');
student2.exclude('плохая учёба');
console.log(student2);
