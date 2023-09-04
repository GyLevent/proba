document.getElementById("first").innerHTML = "teszt";
var a = 2;
var b = 2;
function szoroz(p1, p2) {
  return p1 * p2;
}
document.getElementById("first").innerHTML += szoroz(a, b);
