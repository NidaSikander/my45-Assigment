"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician
let magicianNames = ["Ali ", "Hamza", "Asad"];
function show_magicians(Great) {
    for (let item of magicianNames) {
        console.log(Great, item);
    }
}
;
show_magicians("Hello , How are you.");
show_magicians('Hello');
let magiciansNames2 = ["Ali", "Hamza", "Asad"];
function make_great(Great2) {
    for (let item of magiciansNames2) {
        console.log(Great2, item);
    }
}
show_magicians('');
