"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in ae the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your arrayred in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.//
//• Store the locations in ae the array is not in alphabetical order.
let places = ['China', 'Iran', 'Brazil', 'Saudia Arabia', 'Argentina'];
//• Print your arriray in its original order.
console.log("original Order:", places);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...places].sort());
//• Show that your array is still in its original order by printing it.
console.log('Original Order:', places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [...places].sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("original Order: ", places);
//• Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Reverse Order:", places);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Orginal Order:", places);
//• Sort your arrayred in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Alphabetical Order:", places);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.//
places.reverse();
console.log("Reverse alphabetical Order:", places);
