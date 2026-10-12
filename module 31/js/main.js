var x = 15;

 if(x>15){
    console.log("ju mund te krijoni account")
 }else{
    console.log("ju nuk mund te krijoni account")
 }
 // perseritje

 console.log("hello");
 console.log("hello");
 console.log("hello");
 console.log("hello");
 console.log("hello");


 for(var i=0; i<10; i++){
    console.log("helo from loop");
 }


for (var i=0, i<10; i++){
    console.log(i);
}

var nxenesit = ["Olta", "Elda", "Deoni", "Drini", "Ari"];
//console.log(nxenesit[0]);
//console.log(nxenesit[1]);
//console.log(nxenesit[2]);
//console.log(nxenesit[3]);
//console.log(nxenesit[4]);

for(var e = 1; e<nxenesit.length; e++){
    console.log(nxenesit[e]);
}


//while loop

var i = 0;
do{
    i = i+1;
    console.log("hello from while loop");
}while(i<10);



var e = 0;
do{
    e = e+2;
    console.log("hello");
}while(e<10);




let n = 0;
let u = 0;

while(n<3){
    n++;
    //n = n+1
    u = u +n;
    console.log(u);
    console.log(n);

}

var person ={
    firstName: "John",
    lastName: "Doe",
    age:50,

}

for(y in person){
    console.log(y+ " : " +person[y]);
}

var ushqimev = ["mish", "buke", "kos", "vaj", "sheqer"];

for(z in ushqimev){
    console.log(ushqimev[z]);
}
//for /of


var teksti = "Hello World";

var shumaeO = 0;

for (1 of teksti){
    console.log(1);

    if(1 =="o"){
        shumaeO++;
    }

}
console.log(shumaeO);