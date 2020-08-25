var today = new Date();
var Hr = today.getHours();
// You can change your name here
var name = "";
var lateTxt = "Go to Sleep, Alder! ";
var morningTxt = "Good day, Alder. Coffee is percolating. ";
var afterTxt = "Another good afternoon, Alder. Let's build something! ";
var evenTxt = "Good Evening, Alder. ";

if (Hr >= 0 && Hr < 6) {
  document.getElementById("greetings").innerText = lateTxt + name;
} else if (Hr >= 6 && Hr < 12) {
  document.getElementById("greetings").innerText = morningTxt + name;
} else if (Hr >= 12 && Hr < 17) {
  document.getElementById("greetings").innerText = afterTxt + name;
} else {
  document.getElementById("greetings").innerText = evenTxt + name;
}
