//var ushqimev = ["mish", "buke", "kos", "vaj", "sheqer"];


//console.log(ushqimev[0]);

//for (1 in ushqimev){
  //  console.log(ushqimev[1]);
//}
    

//for(let i = 0; i<ushqimev.length;i++){
  //  console.log(i)
//}

//for(let i = 0; i<5;i++){
  //  console.log(ushqimev[i]);
//}

var input = document.getElementById("input_id");
var buttoni = document.getElementById("btn_id");
var teksti = document.getElementById("teksti_id");


buttoni.onclick = function(){
    teksti.innerHTML= input.value;
}

//var teksti2 = "The best school in the world is Digital School";
//var result = teksti2.search("Digital");
//document.getElementById("result1").innerHTML = result;

//metoda search( kthehen ne vendin se ku e ka gjet keywordin "Digjital" ne stringun teks2)

//var teksti2 = "The best school in the world is Digital school";
//var result = teksti2.search(/Digital/,"Another school");
//document.getElementById("result2").innerHTML = result;

//var teksti3 = "abcdef"
//var regex = new RegExp('abc');

//document.getElementById("reseult4")/nnerHTMl = regex.test(teksti3);

var teksti2 = "My School is the best in the world";
var regex = /school/g;
document.getElementById("reseult5").innerHTML =teksti2.match(regex);

var teksti6 = " My school is the best in the world";
var regex6 = /i/g;
document.getElementById(reseult6).innerHTML =teksti6.match(regex6);

var regex7 = /[abc]/g;
document.getElementById("reseult7").innerHTML =teksti6.match(regex7);



var teksti6 = "My school is the best in the world 10";
var regex8 = /[0-9]/g;
document.getElementById("reseult8").innerHTML =teksti6.match(regex8);

var regex9 = /(top|best|school)/g;
document.getElementById("reseult9").innerHTML =teksti6.match(regex9);