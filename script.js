var foo = localStorage.getItem("value");
let rnd1 = Math.floor(Math.random() * 100 + 1);
let rnd2 = Math.floor(Math.random() * 100 + 1);
let rnd3 = Math.floor(Math.random() * 100 + 1);
function lightblueBG() {
  if (localStorage.getItem("value") == "dark") {
    localStorage.setItem("value", "white");
    document.body.style.backgroundColor = rgb(rnd1, rnd2, rnd3);
  } else {
    localStorage.setItem("value", "dark");
    document.body.style.backgroundColor = rgb(rnd1, rnd2, rnd3);
  }
}
