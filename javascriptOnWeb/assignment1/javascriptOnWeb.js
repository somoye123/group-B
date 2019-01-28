//object assignment
//javascript object of any item
var Cat = {
    name: 'fluffy',
    color: 'black'
}
// console.log(Cat.name);
//  console.log(Cat.color);

//completing of the code in question
const foo = {
    color : 'red',
    getColor : function() {
            return this.color;
    }
}
 console.log(foo.getColor());


// prototype assignment
let Calculator = function(num1, num2) {
  this.number1 = num1;
    this.number2 = num2;
};
Calculator.prototype.addition = function() {
  console.log(this.number1 + this.number2);
}; Calculator.prototype.subtraction = function () {
    console.log(this.number1 - this.number2);
}; Calculator.prototype.multiplication = function () {
    console.log(this.number1 * this.number2);
}; Calculator.prototype.division = function () {
    console.log(this.number1/this.number2);
};
// var access = new Calculator(10,5);
// access.addition();
// access.subtraction();
// access.multiplication();
// access.division();



// Callback assignment

// first callback example
// setInterval(function(){console.log('hello levelup');},3000);

// another callback example
// function morning(){console.log('good morning');}
// function greeting(func){
//     func();
// }
// greeting(morning);