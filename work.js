function sum(args){
    let retVal = 0;
    for (let i = 0; i < arguments.length; i++){
        retVal += arguments[i];
    }
    return retVal;
};


// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

function sum2(...args){
    let retVal = 0;
    for (let i = 0; i < args.length; i++) {
        retVal += args[i];
    }
    return retVal;
};

// console.log(sum2(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4, 5));

Function.prototype.myBind = function (arg) {
    let that = this;
    
    let bindArgs = Array.from(arguments).slice(1);
    return function(){
        let callArgs = Array.from(arguments);
        let somethingElse = bindArgs.concat(callArgs);
        return that.apply(arg, somethingElse);
    }
};

Function.prototype.myBind2 = function (...args) {
    let that = this;
    
    let bindArgs = args.slice(1);
    return function(...args2){
        let callArgs = args2;
        let somethingElse = bindArgs.concat(callArgs);
        return that.apply(args[0], somethingElse);
    }
};

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
}
  
class Dog {
    constructor(name) {
      this.name = name;
    }
}
  
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// markov.says.myBind2(pavlov, "meow", "Kush")();
// markov.says.myBind2(pavlov)("meow", "a tree");
// markov.says.myBind2(pavlov, "meow")("Markov");


const curriedSum = function(numArgs) {
    let numbers = [];
    const _curriedSum = function(n) {
        numbers.push(n);
        if (numbers.length === numArgs) {
            let retVal = 0;
           for (let i of numbers){
                retVal += i;
           }
           return retVal;
        } else{
            return _curriedSum;
        };
    }
    return _curriedSum;
}

// const sum2180 = curriedSum(4);
// console.log(sum2180(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let that = this;
    argsLen = [];
    const _curry = function(n){
        console.log(that);
        argsLen.push(n);
        if (argsLen.length === numArgs){
            return that(...argsLen);
        } else {
            return _curry;
        }
    }
    return _curry;
};




// console.log(sum(1, 2, 3, 4));

const cs = sum.curry(4);
console.log(cs(1)(2)(3)(4));