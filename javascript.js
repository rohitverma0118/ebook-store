console.dir(document.body);
//console.log(document.body.childNodes[1]);


let btn1 = document.querySelector(".button1")
let btn21 = document.querySelector(".button-2");
let btn22 = document.querySelector(".button--2");

btn21.onclick = () => {
  document.body.style.background = "rgb(237,237,253) linear-gradient(90deg, rgba(237,237,253,1) 0%, rgba(255,239,252,1) 50%, rgba(255,246,239,1) 100%)";
};   

btn22.onclick = () => {
  document.body.style.background = "#1E1E21";
}; 

//new search
let searchBtn = document.querySelector(".button");

  searchBtn.onclick = () => {
  var searchQuery = document.querySelector(".button").value.toLowerCase();
  window.location.href = "Boxes.html?searchQuery=" + document.querySelector(".button").value;
}