//Arrays 

const names = ["Diego", "Ana", "Paulo", "Maria", "Marcos", "Giovana", "Felipe", "Tereza", "Carlos", "Thais", "Silmar", "Hellen", "Elaine", "Mercedes", "Manoel", "Roberta"];

const numbers = [1, 5, 14, 2, 253, 52, 8, 7, 17, 72, 148, 256, 512, 768, 925, 3, 11, 21, 27, 23, 54, 42, 38, 40, 50, 444, 517, 768, 41, 53, 83, 92, 81, 111, 25, 19, 22];

document.write('Arrays: <br/><br/>');

document.write('names: ' + names + '<br /><br /><br />');

document.write('numbers: ' + numbers + '<br /><br /><br /> <hr/>');

// Array numbers 

document.write('Numbers: <br/><br/>');

// Larger Number

let largerNumber = Math.max(...numbers);

document.write('The largest number is = ' + largerNumber + '<br /><br />');

// Smaller Number

let smallNumber = Math.min(...numbers);

document.write('The Smallest number is = ' + smallNumber + '<br /><br />');

// Sum of all array numbers

let sum = (accumulator, curr) => accumulator + curr;
document.write('The sum of array numbers is: ' + numbers.reduce(sum) + '<br/><br/> <hr/>');

//Array names

document.write('Names: <br/><br>');

document.write(`${names[0]} ${numbers[19]}  <br/>`);
document.write(`${names[5]} ${numbers[36]}  <br/>`);
document.write(`${names[4]} ${numbers[9]}  <br/>`);
