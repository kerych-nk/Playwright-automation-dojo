/*
Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

function truncate_string(str, n) {
    return str.slice(0, n);
}
console.log(truncate_string("Robin Singh",4));