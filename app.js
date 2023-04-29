if (!localStorage.getItem("tasks")) {
    createStorage();
}
else
{
   runStorage();
}

function createStorage() {
    localStorage.setItem("tasks", document.getElementById("list").innerHTML);
}

function runStorage() {
    document.getElementById("list").innerHTML = localStorage.getItem("tasks");
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove()
    localStorage.setItem("tasks", document.getElementById("list").innerHTML);
  }

}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Bir şeyler yazmalısınız!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      localStorage.setItem("tasks", document.getElementById("list").innerHTML);
    }
  }
  localStorage.setItem("tasks", document.getElementById("list").innerHTML);
}