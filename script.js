//Arrays 

const names = ["Diego", "Ana", "Paulo", "Maria", "Marcos", "Giovana", "Felipe", "Tereza", "Carlos", "Thais", "Silmar", "Hellen", "Elaine", "Mercedes", "Manoel", "Roberta"];

const numbers = [1,4,9,16,25,36,49,81,100,36,121,144,169,36,196,225,729];

const despensa = [
    {fruta: 'manga', fruta: 'abacate', fruta:'laranja', fruta:'uva'},
    {cereal: 'feijão', cereal: 'arroz', cereal: 'soja'},
    {doce: 'chocolate', doce: 'pé-de-moleque', doce: 'brigadeiro', doce:'doce-de-leite'}
]

// Array numbers 

// adds 1 more for each array item
let sumAll = numbers.map((x)=> x + 1);

//reverse numbers
const inverter = false;

if(inverter === true){
 numbers.reverse();
};

//find item
let finder = numbers.find((x) => x < 36);

//filter item in array
let fil = numbers.filter((x) => x === 36);

//has item in array (true or false)
let hasItem = numbers.some((x) => x === 16);

//set item at the beginning of the array

if(inverter === false){ 
numbers.unshift(289);
} else{
    numbers.push(289);
}

// Larger Number

let largerNumber = Math.max(...numbers);

// Smaller Number

let smallNumber = Math.min(...numbers);

// Sum of all array numbers

let sum = numbers.reduce((soma, i) => {
    return soma + i;
});

// Square Root

let square = numbers.map(function (num) {
    return Math.sqrt(num)
});

// potentiation

let pot = numbers.map(function (num) {
return Math.pow(num, 3);

})

//Array names

//Separator
let separ= names.join('/')

// add lastname
let surName = names.map((e) => {
   return e += ' Ramos'
})