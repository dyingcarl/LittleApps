
function colorChange(r,g,b,item){
  item.style.borderColor = "rgb("+r+","+g+","+b+")";
  // item.style.backgroundColor = "rgb("+(255-r)+","+(255-g)+","+(255-b)+")";
}
function showColor(r,g,b,item){
  item.innerHTML = "<span class='ColorCode'>RED: "+r+ " GREEN: "+g+" BLUE: "+b+"</span>";
  item.style.color = "rgb("+r+","+g+","+b+")";
}


function randomColor(){
  var redCode = Math.floor(Math.random()*256);
  var greenCode = Math.floor(Math.random()*256);
  var blueCode = Math.floor(Math.random()*256);
  var item = document.querySelector(".displayArea");
  var borderItem = item;
  colorChange(redCode,greenCode,blueCode,borderItem);
  showColor(redCode,greenCode,blueCode,item);
}


document.querySelector(".interaction button").setAttribute("onclick","randomColor();");
