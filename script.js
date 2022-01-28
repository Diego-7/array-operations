//Arrays 

const names = ["Diego", "Ana", "Paulo", "Maria", "Marcos", "Giovana", "Felipe", "Tereza", "Carlos", "Thais", "Silmar", "Hellen", "Elaine", "Mercedes", "Manoel", "Roberta"];

const numbers = [1,4,9,16,25,36,49,81,100,121,144,169,196,225];

const despensa = [
    {fruta: 'manga', fruta: 'abacate', fruta:'laranja', fruta:'uva'},
    {cereal: 'feijão', cereal: 'arroz', cereal: 'soja'},
    {doce: 'chocolate', doce: 'pé-de-moleque', doce: 'brigadeiro', doce:'doce-de-leite'}
]

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

// Square Root

let square = numbers.map(function (num) {
    return Math.sqrt(num)
});

// potentiation

let pot = numbers.map(function (num) {
return Math.pow(num, 3);

})

//Array names

document.write('Names: <br/><br>');

document.write(`${names[0]} ${numbers[19]}  <br/>`);
document.write(`${names[5]} ${numbers[36]}  <br/>`);
document.write(`${names[4]} ${numbers[9]}  <br/>`);
