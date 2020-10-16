//PART1
//1
// O(n + 10) => O(n)

//2
// O(100 * n) => O(n)

//3 
//O(25) => O(1)

//4
// O(n^2 + n^3) => O(n^3)

//5 
//O(n + n + n + n) => O(n)

//6
// O(1000 * log(n) + n) => O(log(n))

//7
// O(1000 * n * log(n) + n) => O(n*log(n))

//8 
//O(2^n + n^2) => O(2^n)

//9
// O(5 + 3 + 1) => O(1)

//10
//O(n + n^(1/2) + n^2 + n * log(n)^10) => O(n*log(n)^10)

//PART2
//1
function logUpTo(n) {
for (var i = 1; i <= n; i++) {
    console.log(i);
    }
    }
//Time complexity - O(n)
//Space complexity -   O(1)

//2
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
    }
    }
//Time complexity - O(1)
//Space complexity -   O(n) 

//3
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
    }
    }
//Time complexity - O(n)
//Space complexity -   O(n)  

//4
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
    newArray[i / 2] = array[i];
    }
    }
    return newArray;
    }
//Time complexity - O(1)
//Space complexity -   O(n)

//5
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
    subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
    }
    return subtotalArray;
    }
//Time complexity - O(1)
//Space complexity -   O(n)   
    