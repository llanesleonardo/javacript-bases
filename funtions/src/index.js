this.monachina = 'may'

// normal function
function myFunction(name) {
  return name + ' ' + this.monacina
}

// anonymus function asing to a variable
const myFuntionA = function () {
  return true
}

// anonymus arrow function asing to a variable
const myArrrowFuntion = () => true

// function in objects
const myObject = {
  sum: function (a, b) {
    return a + b
  }
}

console.log(myObject.sum(2, 2))

// High order funtions
function hof(fun) {
  return function fun(a, b) {
    return a + b
  }
}

console.log(hof()(3, 3))
