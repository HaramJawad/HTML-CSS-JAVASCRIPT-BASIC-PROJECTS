console.log("A Snake Water Gun Game")
function random()
{
  const choices=["S","W","G"]
  const computerChoice=choices[Math.floor(Math.random()*3)]
  return computerChoice;
}
const computerChoice = random();
let userChoice = prompt("Enter S,W, OR G").toUpperCase()
if(userChoice===computerChoice)
{
  console.log("The game is Draw")
}
else if((userChoice==="S" && computerChoice==="W") || (userChoice==="W" && computerChoice==="G")  || (userChoice==="G" && computerChoice==="S"))
{
console.log("user wins")
}
else 
{
  console.log("Computer Wins")
}