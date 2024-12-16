// 1 qisim
// masala 1
// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);

// masala 2
let text = "hello";
let bigletters = text.toUpperCase();
console.log(bigletters);
console.log(text);

// masala 3
// let add = [1,2,3];
// add.push(4);
// console.log(add);

// masala 4
// let numbers = [1,2,3,4];
// console.log(numbers.length);

// masala 5
// let firm = "Hello Word";
// let newtext =firm.replace ("Word","Javascript");
//  console.log(newtext);
//  console.log(firm);

// masala 6
// let arr = [4,5,6];

// console.log(firstelement = arr[0]);
// console.log(arr);

// masala 7
// let city = "Uzbekistan";
// console.log(city.length);
// console.log(city);

// masala 8
// let numbers = [2,3,4];
//   numbers.unshift(1);
// console.log(numbers);

// masala 9
// let text = "JAVASCRIPT";
// console.log(text);
// console.log(text.toLowerCase());

// masala 10

// let fruits = ["apple","banana","cherry"];

// let result1 = fruits.join(",");
// console.log(result1);

// 2 qisim

// masala 1
// let numbers = [9,5,3,2,7,6,4,8,1];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// masala 2
// let fruits ="apple , banana , cherry";

// let result = fruits.split(", ");
// console.log(result);

// masala 3
// let numbers = [1,2,3,4,5];

// let result = numbers.includes(6);
// console.log(result);

// masala 4
// 1-yechim
// let text = "Javascript";

// let result = text.slice(0, 4);
// console.log(result);

// 2-yechim
// let text = "Javascript";

// let result = text.substring(0, 4);
// console.log(result);

// masala 5
// 1-yechim
// let numbers = [1,2,3,4,5,6,7,8,9];
// let result = numbers.filter(function(val){
//     return val%2 == 0;
// });
// console.log(result);

// 2-yechim
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = numbers.filter((num) => num % 2 == 0);
// console.log(result);

// masala 6
// let text = "Hello world!";
// let substring = "world";
// if (text.indexOf(substring) >= 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// masala 7
// let numbers = [10,20,30,40,50]
// console.log(numbers.indexOf(30));

// masala 8
// let numbers = [1,2,3,4,5];
// let result = numbers.slice(1, 3);
// console.log(result);

// masala 9
// let numbers = [5,10,15];
// let sum = 0;
// numbers.forEach(n => sum += n);
// console.log(sum);

// masala 10
// let numbers = "123-456-789";
// let result = numbers.replaceAll("-", " ");
// console.log(result);

// masala 11
// let numbers = [1,5,3,9,2];
// let max =Math.max(...numbers);
// console.log(max);

// masala 12
// let fruits = ["orange", "apple", "banana"];
// let sortArr = fruits.sort();
// console.log(sortArr);

// masala13
// let numbers = [2, 4, 6];
// let result = numbers.every((num) => num % 2 == 0);
// console.log(result);

// masala14
// let str = "javascript";
// let result = [...str].reverse().join("");
// console.log(result);

// masala 15
// let arr = [1, 2, 3, 4];
// let newarr = arr.map((num) => num + 2);
// console.log(newarr);

// 3-qisim
// masala 1
// let str = "madam";
// let polindrom = str == [...str].reverse().join("");
// console.log(polindrom);
// masala 2
// function getRandomElements(arr, n) {
//     return arr.sort(() => Math.random() - 0.5).slice(0, n);
//   }
  
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//   let randomElements = getRandomElements(arr, 3);
//   console.log(randomElements);

// masala 3
// let str = ["apple", "banana", "apple", "orange", "banana"];
// let unical = [...new Set(str)];
// console.log(unical);
// masala4
// let arr = [1, [2, 3], [4, 5], [6]];
// let flatarr = arr.flat(Infinity);
// console.log(flatarr);

// masala 5
// function capitalizeWords(str) {
//     return str.split(' ') 
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   }
  
//   const input = "hello world from javascript";
//   const output = capitalizeWords(input);
//   console.log(output); 