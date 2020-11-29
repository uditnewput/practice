function show() {
  var x = document.getElementById("show");
  if (x.style.height === "0px") {
    x.style.height = "274px";
  } else {
    x.style.height = "0px";
  }
}

function edit(id){
  var search = "editInput"+id;

  var x = document.getElementById(search);
  if (x.className === "form-control") {
    x.className = "form-control-plaintext";
    x.readOnly= true;
  } else {
    x.className = "form-control";
    x.readOnly= false;

  }

  var search1 = "editInputButton"+id;
  var y = document.getElementById(search1);
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}