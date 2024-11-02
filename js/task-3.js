/*Напиши функцию filterArray(numbers, value), которая принимает массив чисел (numbers) и значение (value) как параметры. 
 * Функция должна возвращать новый массив только тех чисел из массива numbers, которые больше значения value.
   Внутри функции: 
   Создай пустой массив, в который будешь добавлять подходящие числа. 
   Используй цикл для итерации каждого элемента массива numbers. 
   Используй условный оператор if внутри цикла для проверки каждого элемента и добавления в свой массив. 
   Верни свой новый массив с подходящими числами как результат.
 */
function filterArray(numbers, value) {
  const arrayResult = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      arrayResult.push(numbers[i]);
    }
  }
  return arrayResult;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
