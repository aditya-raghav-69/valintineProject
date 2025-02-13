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
// let header = document.querySelector(".header");

console.log("hello");
let a, b;
a = Math.floor(Math.random() * 50);
b = a + 12;

check.addEventListener("click",function ()  {
     
    round.style.backgroundColor = "pink"; // Changed to pink
    round.style.display = "none";

    img.src = "assets/image copy.png";
    img.style.width = "20rem";
    img.style.height = "15rem";
    img.style.background = "none";
    body.append(h1);
    body.append(img);

    h1.textContent = "hey , I like  you. will you be my valintine?";
    h1.style.fontFamily="papyrus";
    h1.style.color = "rgb(255, 105, 180)"; // Changed to hot pink
    check.style.display = "none";
    checkbtn.style.display = "none";

    replyyes.style.display = "inherit";
    replyno.style.display = "inherit";
    yes.style.display = "inherit";
    no.style.display = "inherit";
});

let count = 0;
let pushpa, h2,h3 , video;

function rejection1() {
    if (!pushpa && !h2 && count<6) {
        h2 = document.createElement("h2");
        pushpa = document.createElement("img");
        pushpa.src = "assets/image copy 3.png";
        h2.textContent = "HAAN KARBE KI HI MAANEGA";
        h2.style.fontFamily = "times new roman";
        h2.style.color = "rgb(255, 182, 193)"; // Changed to light pink
        pushpa.style.width = "20rem";
        pushpa.style .height = "15rem";
        body.append(pushpa);
        body.append(h2);
        body.removeChild(img);
    } else {
        if (count ==6) {
            console.log("inside the rejection 2");
                body.removeChild(pushpa);
            
                body.removeChild(h2);
            
            pushpa = null;
            h2 = null;
            rejection2();
            
        }
    }
}
function rejection2() {
     h3 = document.createElement("h3");
    h3.innerHTML = "OK I UNDERSTAND YOU COULDN'T  BE MINE";
    h3.style.fontFamily = "times new roman";
    h3.style.color = "rgb(255, 255, 255)"; // Changed to light pink
    body.appendChild(h3);
   
    video = document.createElement("video");
    video.src = "assets/9d07a5bd.mp4";
    video.controls = true;
    
    video.style.width = "14rem";
    video.style.height = "20rem";
    video.autoplay = true;
    body.appendChild(video);
    no.style.display = "none";
    replyno.style.display = "none";
   
       
}

no.addEventListener("mouseover", function () {
    let randomX = Math.floor(Math.random() * 150) - 50; // Random value between -50 and 100
    let randomY = Math.floor(Math.random() * 150) - 50; // Random value between -50 and 100
    no.style.transform = `translate(${randomX}px, ${randomY}px)`;
    count++;
    if (count > 4) {
        rejection1();
    }
});

yes.addEventListener("change", function () {
    if (yes.checked) {
        let imgYes = document.createElement("img");
        let h2 = document.createElement("h2");
        imgYes.src = "assets/image copy 2.png";
        imgYes.style.width = "10rem";
        imgYes.style.height = "8rem";
        img.style.display = `none`;
        body.append(imgYes);
        h2.textContent = "Yay! I'm so happy finally  you said yes! . I'll try to be the best for you.";
        h2.style.fontFamily = "papyrus";
        h2.style.color = "rgb(255, 105, 180)"; // Changed to hot pink
        body.append(h2);
        no.style.display = "none";
        replyno.style.display = "none";
        if (video) {
            yes.style.display = "none";
            replyyes.style.display = "none";
            if (video) {
                body.removeChild(video);
                body.removeChild(h3);
            }
        
       
        }
    }
});