var maxNumbers = 101;

var numbers = [];

// Ciclo For per pushare i numeri

for (var i = 1; i < maxNumbers; i++){
    if (i % 3 == 0){
        numbers.push("Fizz");
        // console.log("fizz")
    } else if (i % 5 == 0) {
        numbers.push("Buzz");
        // console.log("buzz")
    } else if (i % 3 == 0 && i % 5 == 0) {
        numbers.push("FizzBuzz")
        // console.log("fizzbuzz")
    } else {
        numbers.push(i);
        // console.log(i)
    }
}

// Verifica in console e scritta dell arrey nel documento

// console.log(numbers);

document.writeln(numbers);

