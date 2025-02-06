

let body = document.querySelector("body");

let check = document.querySelector("#check");
let round = document.querySelector(".round");
let h1 = document.createElement("h1");
let img = document.createElement("img");

console.log("hello");


check.addEventListener("click",function ()  {
     
    round.style.backgroundColor = "red";
    round.style.display = "none";

    body.prepend(img);
    img.src = "assets/image copy.png";
    img.style.width = "600px";
    img.style.height = "400px";
    img.style.background = "none";
    body.prepend(h1);
    h1.textContent = "hey , I love you. will you be my valintine?";
    
});