console.log("app.js loaded");

let left=0;
let right=0;
let op='*'

let maxSpM = 0;

let solves=[]

let solElm = document.getElementById("solution");
solElm.focus();
solElm.onkeyup = function(e){
    if(e.keyCode == 13)check_solution();
   
    if(e.key == '+' )
    {
      op='+';
      new_problem();
    }

    if(e.key == '*' )
    {
      op='*';
      new_problem();
    }
}
new_problem();

function check_solution()
{
  solve = parseInt(solElm.value);
  console.log("Yup, that's "+solve);
  solElm.value="";

  if(solve == eval(left+op+right))
  {
    console.log("YAY!");
    document.getElementById("stats").textContent = "YAY!";
    solves.push(Date.now());
  }
  else
  {
    console.log("NOPE!")
    document.getElementById("stats").textContent = "NOPE!";
  }
  print_stats();
  new_problem();
}

function new_problem()
{
  left = getRandomInt(1,20);
  right = getRandomInt(1,20);
  document.getElementById("problem").textContent = left+' '+op+' '+right;
  solElm.value="";
}

function print_stats()
{
  let stats = "YAY STATS";

  console.log(solves);
  //console.log("comparing"+" "+solves[0]+" "+(Date.now()-60000))
  while( solves.length>0 && (solves[0]<(Date.now()-60000)) )
    console.log("REMOVING "+solves.shift());

  console.log(solves);
  if( solves.length > maxSpM ) maxSpM = solves.length;

  stats = "Solves per Minute: "+solves.length+"\nMaximum SpM: "+maxSpM;
  document.getElementById("stats").textContent = stats;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
