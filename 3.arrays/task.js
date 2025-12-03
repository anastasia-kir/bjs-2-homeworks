// Задача 1. Сравнение массивов
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // если длины разные, массивы не равны
  }

  var result = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }

  return result;
}

// Примеры вызова
console.log(compareArrays([8, 9], [6])); // false
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true




// Задача 2. Средний возраст пользователей по полу
function getUsersNamesInAgeRange(users, gender) {
  var selectedUsers = [];

  for (var i = 0; i < users.length; i++) {
    if (users[i].gender === gender) {
      selectedUsers.push(users[i]);
    }
  }

  if (selectedUsers.length === 0) {
    return 0; // если пользователей нет, возвращаем 0
  }

  var totalAge = 0;
  for (var j = 0; j < selectedUsers.length; j++) {
    totalAge += selectedUsers[j].age;
  }

  return totalAge / selectedUsers.length;
}

// Пример массива людей
var people = [
  {firstName: 'Александр', secondName: 'Карпов', age: 17, gender: 'мужской'},
  {firstName: 'Егор', secondName: 'Морозов', age: 21, gender: 'мужской'},
  {firstName: 'Мелисса', secondName: 'Леонова', age: 40, gender: 'женский'},
  {firstName: 'Мелания', secondName: 'Савельева', age: 37, gender: 'женский'},
  {firstName: 'Мария', secondName: 'Овчинникова', age: 18, gender: 'женский'},
  {firstName: 'Марьяна', secondName: 'Котова', age: 17, gender: 'женский'},
  {firstName: 'Фёдор', secondName: 'Селезнев', age: 50, gender: 'мужской'},
  {firstName: 'Георгий', secondName: 'Петров', age: 35, gender: 'мужской'},
  {firstName: 'Даниил', secondName: 'Андреев', age: 49, gender: 'мужской'},
  {firstName: 'Дарья', secondName: 'Савельева', age: 25, gender: 'женский'},
  {firstName: 'Михаил', secondName: 'Шаров', age: 22, gender: 'мужской'},
  {firstName: 'Владислав', secondName: 'Давыдов', age: 40, gender: 'мужской'},
  {firstName: 'Илья', secondName: 'Казаков', age: 35, gender: 'мужской'},
  {firstName: 'Евгений', secondName: 'Кузьмин', age: 19, gender: 'мужской'}
];

// Примеры вызова функции
console.log(getUsersNamesInAgeRange(people, 'мужской')); // 32
console.log(getUsersNamesInAgeRange(people, 'женский')); // 27.4
console.log(getUsersNamesInAgeRange([], 'женский')); // 0
console.log(getUsersNamesInAgeRange(people, 'инопланетянин')); // 0
