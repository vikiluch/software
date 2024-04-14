const form =document.querySelector("#yogaForm");
const input=document.querySelector("yogaName");
const list=document.querySelector('#yoga');
form.addEventListener("submit", function (e) {
    e.preventDefault();
  const yogaName =input.value;
   // console.log("input.value");
const newLI= document.craatElement("LI");
  newLI.innerText=yogaName;
 // console.log(newLI);
  list.append(newLI);
  input.value="";
});