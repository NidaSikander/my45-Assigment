"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guest_List = ['NIda', 'Tooba', 'Fatima', 'Saba'];
let unableToAttend = "Tooba";
console.log(`${unableToAttend} is unable to attend the dinner.`);
// Replace the guest
let newGuest = "Hareem";
Guest_List[Guest_List.indexOf(unableToAttend)] = newGuest;
// New invitations
Guest_List.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("\nUnfortunately, I can only invite two people for dinner.");
while (Guest_List.length > 2) {
    let removedGuest = Guest_List.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
Guest_List.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
Guest_List.splice(0, Guest_List.length);
console.log(Guest_List); // Shows an empty list
