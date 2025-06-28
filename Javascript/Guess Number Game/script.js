 function randomnumber()
 {
   let rand = 1 + Math.random()*100
  console.log(rand)
  return Math.floor(rand)
 }
 const rand=randomnumber()
 let userInput=0;
let attempts=0;
const maxAttempts=5;
while(userInput!=rand) && attempts < maxAttempts
{
userInput=parseInt(prompt("Enter a number between 1 and 100"),10)
 if (isNaN(userInput)) {
 attempts++;  
 console.log("Invalid input. Please enter a valid number!");
 alert("Invalid input. Please enter a valid number!");
if (attempts >= maxAttempts) {
console.log("Too many invalid attempts. Exiting...");
alert("Too many invalid attempts. Exiting...");
   break;
}
 continue;  
}
 if(userInput>rand)
{
console.log("The number is very greater")
}
else if(userInput<rand)
{
console.log("The number is lesser than the original number")
 }
 else 
 {
   console.log("you guess is correct..")
   break;
 }
}
if (userInput !== rand) 
 {
 console.log("Game over. You did not guess the correct number.");
} 
else 
{
  console.log("Congratulations, you've guessed the correct number!");
}

  