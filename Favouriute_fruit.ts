//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits :string[] = ["mango" , "orange" ,"strawberry", "peach" ,"banana" ]

if (favourite_fruits.includes("mango")) {
    console.log("mango")
}

if (favourite_fruits.includes("orange")) {
    console.log("orange")
}

if (favourite_fruits.includes("strawberry")) {
    console.log("strawberry")
}

if (favourite_fruits.includes("peach")) {
    console.log("i really like peach")
}

if (favourite_fruits.includes("banana")) {
    console.log("i really like banana")
}
