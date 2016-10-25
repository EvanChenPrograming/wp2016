
//app.js

  show(){
    document.getElementById("show").innerHTML="押しちゃダメ！！";
  }
  greet(){
    alert("Hello world!");
  }
  var x=false;
meClicked(){
  if(x==false)document.getElementById("show").style.display="block";
  else document.getElementById("show").style.display="none";
}
