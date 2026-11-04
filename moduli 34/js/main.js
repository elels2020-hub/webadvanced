//function printNames(){
  //  document.write("Elda");
    //document.write("<br>")
    //setTimeout(function() {document.write("olta");}, 3000);

  //  document.write("Drini")
//}

//printNames()



var colors =[ 'red', 'green', 'blue', 'purple'];

function changebgColor(){
    document.querySelector('body').style.background =
    colors[Math.floor(Math.random()*colors.length)]
}


setInterval(changebgColor,1000)