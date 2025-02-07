

let body = document.querySelector("body");

let check = document.querySelector("#check");
let round = document.querySelector(".round");
let h1 = document.createElement("h1");
let img = document.createElement("img");
let checkbtn = document.querySelector(".checkbtn");
let replyyes = document.querySelector(".replyyes");
let replyno = document.querySelector(".replyno");
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");







console.log("hello");
let a, b;
a = Math.floor(Math.random() * 50);
b = a + 12;




check.addEventListener("click",function ()  {
     
    round.style.backgroundColor = "red";
    round.style.display = "none";

    body.prepend(img);
    img.src = "assets/image copy.png";
    img.style.width = "600px";
    img.style.height = "400px";
    img.style.background = "none";
    body.prepend(h1);
    h1.textContent = "hey , I like  you. will you be my valintine?";
    h1.style.fontFamily="papyrus";
    h1.style.color = "rgb(145, 37, 190)";
    check.style.display = "none";
    checkbtn.style.display = "none";

    replyyes.style.display = "inherit";
    replyno.style.display = "inherit";
    yes.style.display = "inherit";
    no.style.display = "inherit";



    
});


no.addEventListener("mouseover", function () {
    let randomX = Math.floor(Math.random() * 200) - 50; // Random value between -50 and 50
    let randomY = Math.floor(Math.random() * 200) - 50; // Random value between -50 and 50
    no.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

yes.addEventListener("click", function () {
    let imgYes = document.createElement("img");
    let h2 = document.createElement("h2");
    imgYes.src = "assets/image copy 2.png";
    imgYes.style.width = "10rem";
    imgYes.style.height = "8rem";
    img.style.display = `none`;
    body.append(imgYes);
    h2.textContent = "Yay! I'm so happy you said yes!";
    h2.style.fontFamily = "papyrus";
    h2.style.color = "rgb(145, 37, 190)";
    body.append(h2);
    



 });