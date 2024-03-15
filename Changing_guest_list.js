"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list
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
