function fade(){
  $(".displayArea").animate({opacity: 0.1},2000);
  setTimeout(randomColor,2000);
  $(".interaction button").attr("disabled",true);
}

function enableBtn(){
  $(".interaction button").attr("disabled",false);
}

function randomColor(){
  var a = $(".displayArea")
  var redCode = Math.floor(Math.random()*256);
  var greenCode = Math.floor(Math.random()*256);
  var blueCode = Math.floor(Math.random()*256);
  var colorCode = "rgb("+redCode+","+greenCode+","+blueCode+")";
  a.css("borderColor",colorCode);
  a.animate({opacity: 1.0},2000);
  a.html("<span class='ColorCode'>RED: "+redCode+ " GREEN: "+greenCode+" BLUE: "+blueCode+"</span>");
  setTimeout(enableBtn,2000);
}

$(".interaction button").on("click", fade);
// $(".displayArea").on("click",randomColor);
