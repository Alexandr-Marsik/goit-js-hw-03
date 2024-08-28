/////////////////////////////////////////////////////////////
//function checkStorage(storage, item) {
//  const itemLowerCase = item.toLowerCase();
//  for (const el of storage) {
//    if (el.toLowerCase() === itemLowerCase) {
//      return `${itemLowerCase} is available to order!`;
//    }
//  }
//  return 'Sorry! We are out of stock!';
//}
//console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
/////////////////////////////////////////////////////////////
//function getCommonElements(array1, array2) {
//  let newArray = [];
//  for (let i = 0; i < array1.length; i++) {
//    if (array2.includes(array1[i])) {
//      newArray.push(array1[i]);
//    }
//  }
//  return newArray;
//}
//console.log([10, 20, 30, 40], [4, 30, 17, 10, 40]);
/////////////////////////////////////////////////////
//function calculateTotalPrice(order) {
//  let sum = 0;
//  for (let num of order) {
//    sum += num;
//  }
//  return sum;
//}
//console.log(calculateTotalPrice([12, 85, 37, 4]));
//console.log(calculateTotalPrice([164, 48, 291]));
//console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
////////////////////////////////////////////////////////////
//function multiply() {
//  let total = 1;
//
//  for (const arg of arguments) {
//    total *= arg;
//  }
//
//  return total;
//}
//console.log(multiply(1, 2, 3)); //  6
//console.log(multiply(1, 2, 3, 4)); //  24
//console.log(multiply(1, 2, 3, 4, 5)); //  120
///////////////////////////////////////////////
//                     МЕТОД.join();
//const courses = ['html', 'css', 'javaScript', 'react', 'post'];
//const coursesDesc = courses.join('*');
//console.log('coursesDesc:', coursesDesc);
/////////////////////////////////////////
//                      МЕТОД.split()
//const title = 'JavaScript is awesome';
//const arrayFromTitle = title.split(' ');
//console.log('arrayFromTitle:', arrayFromTitle);
//arrayFromTitle[arrayFromTitle.length - 1] = 'cool';
//console.log('arrayFromTitle:', arrayFromTitle);
//const transformTitle = arrayFromTitle.join(' ');
//console.log('transformTitle:', transformTitle);
/////////////////////////////////////////////////
//               МЕТОД .concat() обьеденяет масивы
//const animals = ['pig', 'pig1', 'pig2'];
//const animals2 = ['pig3', 'pig4', 'pig5'];
//const animals3 = animals.concat(animals, animals2);
//console.log(animals3);
/////////////////////////////////////////////////////
//               МЕТОД .indexOf() -резрешает найти
//              порядковый номер элемента в масиве
//const animals = ['pig', 'pig1', 'pig2'];
//const animals2 = ['pig3', 'pig4', 'pig5'];
//const animals3 = animals.indexOf('pig2');
//console.log(animals3);
///////////////////////////////////////////////////
//              МЕТОД .push() /  - разрешае добавлять
// элементы в масиве в конец
//              МЕТОД .pop() -удаляет по одному элементу
// с конца масива
//              МЕТОД .unshift() -  добавлять элементы
//  в масиве в начало
//              МЕТОД .shift() - удаляет по одному элементу
// с начала масива
//const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
//console.table(friends);
//function customIncludes(array, friendName) {
//  for (let i = 0; i < array.length; i += 1) {
//    if (array[i] === friendName) {
//      console.log(`Hoorray we find ${array[i]}`);
//      return true;
//    }
//  }
//  return false;
//}
//const isPolyFriend = customIncludes(friends, 'Poly');
//console.log('isPolyFriend:', isPolyFriend);
//
//function multiply(x, y) {
//  const result = x * y;
//  return result;
//}
//const result1 = multiply(8, 10);
//console.log('result1:', result1);
//
//function calcAverage() {
//  const numberCount = arguments.length;
//  let sum = 0;
//  for (const argument of arguments) {
//    sum += argument;
//  }
//  return sum / numberCount;
//}
