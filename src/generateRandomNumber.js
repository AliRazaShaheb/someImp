console.clear()

document.getElementById("app").innerHTML = `
write a function that generate random number
<br/>
<h1> ${randomNumberGenerator(5,100)} </h1>
`;

function randomNumberGenerator(startRange, endRange){
  let num = Math.floor(Math.random()*endRange + startRange)
  return num
}
