// Code your solutions in this file
function countDown(x){
   let count=x;
   for (count=x; x>-1; x--){
      console.log(x);}}

console.log(countDown(10));
//
function writeCards(n, y){
  let birthday="for the wonderful "+y+" gift!";
  let sentence=[];
  for (let i=0; i<n.length; i++){
    sentence.push("Thank you, "+n[i]+", "+birthday);
  }
  return sentence;
}

writeCards(["Lise", "Kaitlin", "Jan"], "birthday");