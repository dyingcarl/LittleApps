

function randomColor(){
  var redCode = Math.floor(Math.random()*256);
  var greenCode = Math.floor(Math.random()*256);
  var blueCode = Math.floor(Math.random()*256);
  var colorCode = "rgb("+redCode+","+greenCode+","+blueCode+")";
  $(".displayArea").css("color",colorCode);
  $(".displayArea").css("borderColor",colorCode);
  $(".displayArea").html("<span class='ColorCode'>RED: "+redCode+ " GREEN: "+greenCode+" BLUE: "+blueCode+"</span>");
}


// document.querySelector(".interaction button").setAttribute("onclick","randomColor();");
$(".interaction button").on("click", randomColor);
$(".displayArea").on("click",randomColor);
