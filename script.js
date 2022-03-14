var nOT = 0;
var input = document.querySelector('input');
var inputContent = null;

input.addEventListener('input', updateValue);

function updateValue(e) {
  inputContent = e.target.value;
}
function textCreate() {
  if(!inputContent) return;
  nOT++;
  document.getElementById('notif').innerHTML = nOT;
  const inner = document.createElement("div");
  const content = document.createTextNode(`${inputContent}`)
  document.getElementById('textInput').value = ''
  inner.setAttribute("class", "text")
  inner.append(content);
  document.getElementById("message").insertBefore(inner, document.getElementsByClassName("text")[0]);
}


function textClear() {
  nOT = 0;
  document.getElementById('notif').innerHTML = '';
  var classID = document.getElementsByClassName("text");
  if(classID.length == 0) return;
  while(classID.length > 0) {
    classID[0].parentNode.removeChild(classID[0]);
  }
}
