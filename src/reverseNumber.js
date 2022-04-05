console.clear();

document.getElementById("app").innerHTML = `
write a function that reverse a given string 
<br/>
<h1> ${reverseNumber(12345)} </h1>
`;

function reverseNumber(numbr) {
  //converting number to string
  // let numberString = numbr.toString()
  //method - 1 converting string to array
  let numberToString = [...numbr.toString()];
  //method - 2 converting string to array
  // let arrString = string.split("");

  let reverseString = numberToString.reverse(); //reverse method
  let joinstring = reverseString.join(""); //join the array method
  return parseFloat(joinstring);
}
