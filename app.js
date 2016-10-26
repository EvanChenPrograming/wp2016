
function  greet(){
    alert("Hello world!");
  }

function  show(){
    document.getElementById("show").innerHTML="押しちゃダメ！！";
  }

var x=true;
function meClicked(){
  if(x==false)document.getElementById("show").style.display="block";
  else document.getElementById("show").style.display="none";
  x=!x;
}
