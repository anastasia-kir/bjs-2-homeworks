// Задача 1. Сравнение массивов

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // разные длины — сразу false
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // если хоть один элемент отличается — false
    }
  }

  return true; // если все элементы одинаковы
}

// Примеры вызова
console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true


// Задача 2. Средний возраст пользователей по полу

function getUsersNamesInAgeRange(users, gender) {
  // Фильтруем пользователей по полу
  var selectedUsers = users.filter(function(user) {
    return user.gender === gender;
  });

  if (selectedUsers.length === 0) {
    return 0; // если пользователей нет, возвращаем 0
  }

  // Получаем массив возрастов
  var ages = selectedUsers.map(function(user) {
    return user.age;
  });

  // Считаем сумму возрастов через reduce и делим на количество
  var totalAge = ages.reduce(function(sum, age) {
    return sum + age;
  }, 0);

  return totalAge / ages.length;
}

// Пример массива пользователей
var people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
];

// Примеры вызова
console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
