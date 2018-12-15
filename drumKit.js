
var activated = false;
var level = 0;
var combo = 0;
var keyQueue = [];
var empty = [];

function SetupQ(){
  for(var i=0;i<level;i++){
    setTimeout(TurnOffRand,1000*i);
  }
  activated = true;
}
function CountDown(){

  $(".displayTxt").text("3");
  setTimeout(function(){
    $(".displayTxt").text("2");
  },700);
  setTimeout(function(){
    $(".displayTxt").text("1");
  },1400);
  setTimeout(function(){
    $(".displayTxt").text("GO!");
  },2100);
}

function whiten(item){
  item.style.backgroundColor = "#fff";
  item.querySelector(".hit-char").style.color = "#000";
}
function blacken(item){
  item.style.backgroundColor = "#000";
  item.querySelector(".hit-char").style.color = "#fff";
}

function refresh(index){
  $("."+index).animate({opacity:'0.3'},'slow');
  $("."+index).animate({opacity:'1.0'},'slow');
}


function TurnOffRand(){
  var tag = Math.floor(Math.random()*9);
  switch(tag){
    case 0:
      refresh("q");
      keyQueue.push("q");
    return "q";
    case 1:
      refresh("w");
      keyQueue.push("w");
    return "w";
    case 2:
      refresh("e");
      keyQueue.push("e");
    return "e";
    case 3:
      refresh("a");
      keyQueue.push("a");
    return "a";
    case 4:
      refresh("s");
      keyQueue.push("s");
    return "s";
    case 5:
      refresh("d");
      keyQueue.push("d");
    return "d";
    case 6:
      refresh("z");
      keyQueue.push("z");
    return "z";
    case 7:
      refresh("x");
      keyQueue.push("x");
    return "x";
    case 8:
      refresh("c");
      keyQueue.push("c");
    return "c";
    default:
      return TurnOffRand();
  }
}
// ANTI-duplication ===>abbandon
// function Newtarget(){
//
//   var temp =TurnOffRand();
//   while(temp===target){
//     temp = TurnOffRand();
//   }
//   target = temp;
// }

function startup(){
  keyQueue=[];
  CountDown();
  level++;
  setTimeout(SetupQ,2100);
}
function strike(event){

  if(event.key === keyQueue.shift() && activated){
    combo++;
    if(combo===level){
      console.log("passed empty check..");
      $(".displayTxt").text("Yay! Level "+level+ " success!");
      combo = 0;
      setTimeout(startup,1000);
    }
  }
  else if (activated){
    alert("You met your end at level "+level+" ..")
    // $(".key").css("backgroundColor","#000");
    // $(".hit-char").css("color","#fff");
    $(".displayTxt").text("Hello.");
    activated = false;
  }
}

document.addEventListener("keypress",strike);
document.querySelector(".gameBoard button").addEventListener("click", startup);
