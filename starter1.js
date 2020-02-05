console.log("starter1.js linked");
let zones =document.querySelectorAll(".zone");
let choices=document.querySelectorAll(".choice");
//we create this to give the usre list of selection 
const choiseList = document.querySelector('#choiselist');
let choiceCounter=0
choiseList.addEventListener('click', function(event) {
  if(choiceCounter<2){
  if(Player1.picSrc==="")
  {console.log("Player1"+event.target.src);
   Player1.picSrc=event.target.src;
  //try to change border
  event.target.style.border = "thick  solid #00685a";
  choiceCounter++;
}else
   {console.log("Player2"+event.target.src);
   Player2.picSrc=event.target.src;
   //try to change border
   event.target.style.border = "thick  solid #802020";
   choiceCounter++;} 
}});

let xArray=[0,0,0,0,0,0,0,0,0];
let oArray=[0,0,0,0,0,0,0,0,0];
let counter=0;
let Player1WinCounter=0;
let Player2WinCounter=0;
let tieCounter=0;
const Player1={name:"" ,
               picSrc:"" ,
               pic:"",
              team:""};
const Player2={name:"" ,
               picSrc:"" ,
               pic:"",
               team:""};
//I dont think that I need it any more.
const img=[{xPic :"<img src=\'https://upload.wikimedia.org/wikipedia/commons/8/8b/AirAsia_X_Logo.svg\'>",
           xSrc :'https://upload.wikimedia.org/wikipedia/commons/8/8b/AirAsia_X_Logo.svg'},
           {oPic :"<img src=\'http://dailydropcap.com/images/O-5.jpg\'>",
           oSrc :'http://dailydropcap.com/images/O-5.jpg'
          }]
//this will give the let the user choige the team.
for(let i=0;i<choices.length;i++)
{choices[i].addEventListener("click",choiceTeam);
console.log(choices[i].innerHTML);
}
//this will get the user names.
document.querySelector('#submit').addEventListener("click",inputInfo);
//here the game will start.
for (let i = 0; i < zones.length; i++) {
    zones[i].addEventListener("click", clickEventX);
   document.querySelector("button").addEventListener("click",reSetEvent);
             }
//will call it when the user click on game zone
function clickEventX() {
    this.removeEventListener("click", clickEventX);
    if(counter%2===0){
      
 this.innerHTML=Player1.pic;
 for (let i = 0; i < zones.length; i++) {

    if (zones[i].innerHTML===Player1.pic) {
      xArray[i]=1;
    }
  }
  document.querySelector('h1').innerText=Player2.name+" turen";
}else {
  
    this.innerHTML=Player2.pic;
        for (let i = 0; i < zones.length; i++) {
           if (zones[i].innerHTML===Player2.pic) {
             oArray[i]=1;
           }
          
         }
         document.querySelector('h1').innerText=Player1.name+" turen";
}
test();

counter++;
}
//here we will stats comparing and know how are the winer
function test(){
  if(xArray[0]+xArray[1]+xArray[2]===3|| //if X win
    xArray[3]+xArray[4]+xArray[5]===3||
    xArray[6]+xArray[7]+xArray[8]===3||
    xArray[0]+xArray[3]+xArray[6]===3||
    xArray[1]+xArray[4]+xArray[7]===3||
    xArray[2]+xArray[5]+xArray[8]===3||
    xArray[0]+xArray[4]+xArray[8]===3||
    xArray[2]+xArray[4]+xArray[6]===3)
    {
      //console.log('hi x');
      document.querySelector('h1').innerText=Player1.team+" team Win";
      Player1WinCounter++;
      localStorage.setItem("xWinStorage",Number(localStorage.xWinStorage)+1);
      console.log('hi x'+localStorage.getItem("xWinStorage"));
      for (let i = 0; i < zones.length; i++) {
        zones[i].removeEventListener("click", clickEventX);
     }
    }else if(oArray[0]+oArray[1]+oArray[2]===3||//if O win
      oArray[3]+oArray[4]+oArray[5]===3||
      oArray[6]+oArray[7]+oArray[8]===3||
      oArray[0]+oArray[3]+oArray[6]===3||
      oArray[1]+oArray[4]+oArray[7]===3||
      oArray[2]+oArray[5]+oArray[8]===3||
      oArray[0]+oArray[4]+oArray[8]===3||
      oArray[2]+oArray[4]+oArray[6]===3)
      {
        document.querySelector('h1').innerText=Player2.team+" team Win";
        Player2WinCounter++;
      localStorage.setItem("oWinStorage",Number(localStorage.oWinStorage)+1);
      console.log('hi x'+localStorage.getItem("oWinStorage"));
        for (let i = 0; i < zones.length; i++) {
          zones[i].removeEventListener("click", clickEventX);
       }
      }else if(oArray[0]+
        oArray[1]+
        oArray[2]+
        oArray[3]+
        oArray[4]+
        oArray[5]+
        oArray[6]+
        oArray[7]+
        oArray[8]+
        xArray[0]+
        xArray[1]+
        xArray[2]+
        xArray[3]+
        xArray[4]+
        xArray[5]+
        xArray[6]+
        xArray[7]+
        xArray[8]>=9){
          console.log('No Winer! Do you whant to play agein');
          tieCounter++;
      localStorage.setItem("tieStorage",Number(localStorage.tieStorage)+1);
      console.log('hi x'+localStorage.getItem("tieStorage"));
        }
}
//this function will call win the user whant to reset the game and start again
function reSetEvent(){
  for (let i = 0; i < zones.length; i++) {
    zones[i].innerHTML=null;
    document.querySelector('h1').innerText=Player1.name+" turen";
    zones[i].addEventListener("click", clickEventX);
    document.querySelector("button").addEventListener("click",reSetEvent);
  }
   xArray=[0,0,0,0,0,0,0,0,0];
   oArray=[0,0,0,0,0,0,0,0,0];
   counter=0;
}
//this function will save the name of the user
function inputInfo(){
  Player1.name=document.querySelector('#Player1Name').value;
  Player2.name=document.querySelector('#Player2Name').value;
  document.querySelector('h1').innerHTML=Player1.name+" turen";
  document.querySelector('.winPage').style.display = "none";
  if(Player1.picSrc.includes('logo_1_donut.png'))
  Player1.team="Donut";
  else if(Player1.picSrc.includes('logo_2_cat.png'))
  Player1.team="Cat";
  else if(Player1.picSrc.includes('logo_3_coffee.png'))
  Player1.team="Coffee";
  else if(Player1.picSrc.includes('logo_4_unicorn.png'))
  Player1.team="Unicorn";
  else if(Player1.picSrc.includes('logo_5_kwala.png'))
  Player1.team="Kwala";
  else if(Player1.picSrc.includes('logo_6_sushe.png'))
  Player1.team="Sushi";
  //inseart Player2 team
  if(Player2.picSrc.includes('logo_1_donut.png'))
  Player2.team="Donut";
  else if(Player2.picSrc.includes('logo_2_cat.png'))
  Player2.team="Cat";
  else if(Player2.picSrc.includes('logo_3_coffee.png'))
  Player2.team="Coffee";
  else if(Player2.picSrc.includes('logo_4_unicorn.png'))
  Player2.team="Unicorn";
  else if(Player2.picSrc.includes('logo_5_kwala.png'))
  Player2.team="Kwala";
  else if(Player2.picSrc.includes('logo_6_sushe.png'))
  Player2.team="Sushi";
  
}
//this function will call to save the player pic
function choiceTeam(){
  this.removeEventListener("click",choiceTeam);
  if(Player1.pic===""){
   Player1.pic=this.innerHTML;//will inseart pic
   
}else if(Player2.pic===""){
  Player2.pic=this.innerHTML;//will inseart pic
   
  
} 
}

    



