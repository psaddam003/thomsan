
    function myFunction() {
  var x = document.getElementById("nav-1");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}