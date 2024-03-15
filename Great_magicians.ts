//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actua



let magicianNames =["Ali " , "Hamza" , "Asad"] 


 
 function  show_magicians(Great:string){

    for (let item of magicianNames) {
        console.log(Great ,item);
    }
};

show_magicians("Hello , How are you.");
show_magicians('Hello');


