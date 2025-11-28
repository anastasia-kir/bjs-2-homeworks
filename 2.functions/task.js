// Задача 1. Функция, которая принимает любое количество чисел и возвращает мин, макс и среднее
function getArrayParams(...arr) {
  // Проверяем, есть ли вообще элементы
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 }; // Если нет чисел, возвращаем нули
  }

  // Создаём переменные для минимального и максимального значения
  let min = arr[0]; // Первое число пока и мин и макс
  let max = arr[0];
  let sum = 0; // Сюда будем складывать все числа, чтобы потом посчитать среднее

  // Проходим по каждому числу в массиве
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) { // Если текущее число меньше min
      min = arr[i]; // обновляем min
    }
    if (arr[i] > max) { // Если текущее число больше max
      max = arr[i]; // обновляем max
    }
    sum += arr[i]; // Добавляем число к сумме
  }

  // Считаем среднее и округляем до двух знаков после запятой
  let avg = Number((sum / arr.length).toFixed(2));

  // Возвращаем объект с результатами
  return { min: min, max: max, avg: avg };
}


// Задача 2. Насадки для мясорубки

// Функция для суммы всех элементов
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0; // Если нет чисел, возвращаем 0

  let sum = 0; // Переменная для суммы
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Добавляем каждое число к сумме
  }
  return sum; // Возвращаем сумму
}

// Функция для разницы между максимальным и минимальным элементом
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0; // Если массив пустой, возвращаем 0

  let min = arr[0]; // Начальное значение минимального числа
  let max = arr[0]; // Начальное значение максимального числа

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]; // Ищем минимум
    if (arr[i] > max) max = arr[i]; // Ищем максимум
  }

  return max - min; // Разница макс мин
}

// Функция для разницы сумм чётных и нечётных чисел
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0; // Проверка на пустой массив

  let sumEven = 0; // Сюда будем складывать чётные
  let sumOdd = 0; // Сюда будем складывать нечётные

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // Если число чётное
      sumEven += arr[i]; // Добавляем в сумму чётных
    } else { // Иначе оно нечётное
      sumOdd += arr[i]; // Добавляем в сумму нечётных
    }
  }

  return sumEven - sumOdd; // Возвращаем разницу
}

// Функция для среднего значения чётных чисел
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0; // Проверка на пустой массив

  let sumEven = 0; // Сумма чётных
  let countEven = 0; // Количество чётных

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // Если число чётное
      sumEven += arr[i]; // Добавляем к сумме
      countEven++; // Считаем количество чётных
    }
  }

  if (countEven === 0) return 0; // Если чётных нет, возвращаем 0
  return sumEven / countEven; // Среднее значение чётных
}


// Задача 3. Функция мясорубки, которая применяет насадку к массивам
function makeWork(arrOfArr, func) {
  // maxWorkerResult — здесь будем хранить максимальный результат работы насадки
  let maxWorkerResult = -Infinity; // Начальное значение минимально возможное

  // Проходим по каждому массиву внутри главного массива
  for (let i = 0; i < arrOfArr.length; i++) {
    // Вызываем функцию насадки для текущего массива
    const result = func(...arrOfArr[i]); // spread оператор разделяет элементы массива

    // Если результат больше текущего максимума, обновляем максимум
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult; // Возвращаем максимальный результат
}

