// Задача 1. Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100; // состояние книги, по умолчанию 100
    this.type = null; // пока тип неизвестен
  }

  // сеттер для состояния
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  // геттер для состояния
  get state() {
    return this._state;
  }

  // метод улучшения состояния
  fix() {
    this.state = this._state * 1.5;
  }
}

// Журнал
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

// Книга
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

// Разновидности книг
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}


// Задача 2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = []; // хранилище книг
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let bookToGive = this.books[i];
        this.books.splice(i, 1); // удаляем книгу из хранилища
        return bookToGive;
      }
    }
    return null;
  }
}

// Пример использования библиотеки
let library = new Library('Моя библиотека');

library.addBook(new DetectiveBook('Артур Конан Дойл', 'Шерлок Холмс', 2019, 1008));
library.addBook(new FantasticBook('Аркадий и Борис Стругацкие', 'Пикник на обочине', 1972, 168));
library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));

let book1919 = library.findBookBy('releaseDate', 1919);
if (!book1919) {
  book1919 = new NovelBook('Неизвестный автор', 'Книга 1919', 1919, 200);
  library.addBook(book1919);
}

let givenBook = library.giveBookByName('Машина времени');
givenBook.state = 20; // повредили книгу
givenBook.fix(); // восстановили
library.addBook(givenBook); // пытаемся добавить обратно


// Задача 3. Журнал успеваемости

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; // структура: { предмет: [оценки] }
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return; // неправильная оценка, не добавляем
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    let sum = this.marks[subject].reduce((acc, val) => acc + val, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    if (subjects.length === 0) return 0;

    let total = 0;
    for (let subject of subjects) {
      total += this.getAverageBySubject(subject);
    }

    return total / subjects.length;
  }
}

// Пример использования
let student = new Student('Олег Никифоров');
student.addMark(5, 'химия');
student.addMark(5, 'химия');
student.addMark(5, 'физика');
student.addMark(4, 'физика');
student.addMark(6, 'физика'); // не добавится

console.log(student.getAverageBySubject('физика')); // 4.5
console.log(student.getAverageBySubject('биология')); // 0
console.log(student.getAverage()); // 4.75
