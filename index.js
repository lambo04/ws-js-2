// 1. Reverse a String
function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// 4. Find Maximum
function findMaximum(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// 5. Find Minimum
function findMinimum(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// 6. Sum of Array
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 7. Filter Array
function filterArray(arr) {
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

// 8. Factorial
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 9. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 10. Fibonacci Sequence
function fibonacci(n) {
    var fib = [];
    var a = 0, b = 1;
    for (var i = 0; i < n; i++) {
        fib.push(a);
        var temp = a;
        a = b;
        b = temp + b;
    }
    return fib;
}

// Example usage
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello")); // 5
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(findMaximum([1, 2, 3, 4, 5])); // 5
console.log(findMinimum([1, 2, 3, 4, 5])); // 1
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(filterArray([1, 2, 3, 4, 5])); // [4, 5]
console.log(factorial(5)); // 120
console.log(isPrime(5)); // true
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
