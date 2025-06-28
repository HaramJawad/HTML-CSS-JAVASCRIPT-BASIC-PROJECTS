
async function Hacker()
{
 return new Promise((resolve)=>{
   
   setTimeout(()=>
     {
     resolve("Username found aashish17...")
   }, 23000);
 });
}
async function runHack()
{
 console.log("Initializing Hack Program...");
 console.log("Ashish15 username...");
 let data = await Hacker();
 console.log(data);
 console.log("Connecting to Facebook...");
}
runHack()