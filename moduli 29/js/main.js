var buttoni = document.getElementById("btn1");


buttoni.onclick = function(){
    alert("You clicked the button!");
}




var namesOfPeople = ["Elda", "Olta", "Deoni","Drini"];

console.log(namesOfPeople);

console.log(namesOfPeople[2]);
console.log(namesOfPeople[4]);

namesOfPeople.push("Dielli")
console.log(namesOfPeople);

//push() e shton nje element ne fund

namesOfPeople.pop();
console.log(namesOfPeople);

//metoda pop() e hek elementin  fundit ne array

namesOfPeople.pop();
console.log(namesOfPeople);

//etoda unshift() e shton nje element ne fillim te array
namesOfPeople.nshift("drita");
console.log(namesOfPeople);

//metoda shift()
//namesOfPeople.shift();
//namesOfPeople.shift();
//namesOfPeople.shift();
//console.log(namesOfPeople);

namesOfPeople.splice(0,2,"hello");//metoda splice()
console.log(namesOfPeople);

console.log(Math.random);

console.log(Math.random(Math.random()*5));