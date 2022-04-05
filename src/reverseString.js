console.clear();

document.getElementById("app").innerHTML = `
write a function that reverse a given string 
<br/>
<h1> ${reverseString("wheel")} </h1>
`;

function reverseString(string) {
  //method - 1
  //  let arrString = [...string]
  //method - 2
  let arrString = string.split("");
  let reverseString = arrString.reverse();
  let joinstring = reverseString.join("");
  return joinstring;
}
