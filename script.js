let names = ["John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura"];

//Function to say hello or goodbye
function sayHelloOrGoodbye(name){
    let firstLetter = name.charAt(0).toLowerCase();

    if(firstLetter === 'j'){
        console.log(`Goodbye ${name}`);
    }else{
        console.log(`Hello ${name}`);
    }
}

//loop over names
for(let i=0; i<names.length; i++){
    sayHelloOrGoodbye(names[i]);
}
