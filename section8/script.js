const button = document.querySelector("button");
const output = document.querySelector(".output");
output.setAttribute("style", "color:red;width:200px;height:100px;text-align:center;");

button.addEventListener("click",
  showOutput
)

function showOutput() {
  const date1 = new Date();
  let cur = date1.getHours();
  if (cur > 17) {
    message = "Its evening"
    output.style.backgroundColor = "black";
  } else if (cur > 12) {
    message = "Its afternoon"
    output.style.backgroundColor = "blue";
  } else if (cur > 0) {
    message = "Its morning"
    output.style.backgroundColor = "orange";
  } else {
    message = "An error occurred"
    output.style.backgroundColor = "red";
  }
console.log(`Cur is ${cur}`)
output.innerHTML = message;

}