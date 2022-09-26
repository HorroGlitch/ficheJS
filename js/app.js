console.log("hello");
let age;
age = '16';

//age est un stand//

const prenom= 'Loïc'
//Prenom est une constante

let addition;
addition = 4+12;
console.log(addition)

let soustraction;
soustraction = 2-50;
console.log(soustraction)

let multiplication;
multiplication = 3*8;
console.log(multiplication)

let division;
division = 7/2;
console.log(division)

let modulo;
modulo = 5%2;
console.log(modulo)

let test;
test = 3>5;
console.log(test)

console.log(typeof(test))

//Test est un boolean

// >  >=  <  <=  ==  ===  !=  !==

const identity= "bonjour" + " " + "Loïc" + " " + "vous avez" + " " + "16" + " " + "ans"
console.log(identity)

//L'opériation qui est réalisée est une concaténation

let majuscule = identity.toUpperCase();
console.log(majuscule)

//identity est une constante qui à toUpperCase dedans, stocké donc dans une variable majuscule qui rend les caractères en majuscules.


age = prompt("quel est votre age")
if (age <=0){
console.log("vous êtes un poisson pané");
} 

if (age < 120){
console.log("Votre âge est validé");
}else if (age = 0){
console.log("Je ne suis pas d'accord");
}

if (age >= 21){
console.log("Vous êtes majeur")
}else if (age < 21 && age >= 18){
console.log("Vous êtes majeur mais pas aux USA")
}else (age < 18);{
console.log("Vous êtes mineur")
}

// <  <=  >=