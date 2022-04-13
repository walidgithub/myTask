
// Preloader
window.addEventListener("load", setTime);

function setTime() {
    setTimeout(() => {
        let preload = document.getElementById('preloader');
        preload.style.display = "none";
    }, 2000);
}

//*******Scale window */
window.addEventListener("resize", scaleWindow);
window.addEventListener("load", scaleWindow);

function scaleWindow() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let boxWidth = document.getElementById('main').clientWidth;
    let boxHeight = document.getElementById('main').clientHeight;

    let scaleX = width / boxWidth;
    let scaleY = height / boxHeight;

    scaleX = Math.min(scaleX, scaleY);
    scaleY = scaleX;

    let translationX = Math.round((width - boxWidth) / 2);
    let translationY = Math.round((height - boxHeight) / 2);

    let ele = document.getElementById('main');
    let custom_style = {
        position: "fixed",
        left: "0px",
        top: "0px",
        transform: "translate(" + translationX + "px, "
            + translationY + "px) scale3d("
            + scaleX + ", " + scaleY + ", 1)",
    }

    Object.assign(ele.style, custom_style);
}
/*---------------------------------------------------------*/

function chooseAns(btn) {
    let elements = document.getElementsByClassName('button');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "white";
        elements[i].style.color = "black";
    }

    document.getElementById('answer').innerHTML = '';


    if (btn.style.borderColor === "lightblue") {
        return;
    }
    btn.style.backgroundColor = "#0FA0C5";
    btn.style.color = "white";
    document.getElementById('answer').innerHTML = btn.textContent;


    if (document.getElementById('answer').innerHTML !== '') {
        let txtelements = document.getElementsByClassName('hidden-text');

        for (let i = 0; i < txtelements.length; i++) {
            if (txtelements[i].style.color !== "black") {
                txtelements[i].style.cursor = "pointer";
            }
        }
    } else {
        let txtelements = document.getElementsByClassName('hidden-text');

        for (let i = 0; i < txtelements.length; i++) {
            if (txtelements[i].style.color === "black") {
                txtelements[i].style.cursor = "default";
            }
        }
    }

}

// *********************************************
function reset() {
    let btnelements = document.getElementsByClassName('button');
    for (let i = 0; i < btnelements.length; i++) {
        btnelements[i].style.backgroundColor = "white";
        btnelements[i].style.color = "black";
        btnelements[i].style.borderColor = "#0FA0C5";
        btnelements[i].style.cursor = "pointer";
    }

    let letterelements = document.getElementsByClassName('hidden-text');
    for (let index = 0; index < letterelements.length; index++) {
        letterelements[index].style.color = "white";
    }

    let elementtrue1 = document.querySelector('.hidden-true1');
    elementtrue1.style.display = "none";

    let elementtrue2 = document.querySelector('.hidden-true2');
    elementtrue2.style.display = "none";

    let elementtrue3 = document.querySelector('.hidden-true3');
    elementtrue3.style.display = "none";

    document.getElementById('answer').innerHTML = '';
}

// *********************************************

function show() {
    let elements = document.querySelectorAll('.hidden-text');
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.color = "black";
        elements[index].style.cursor = "default";
    }

    let btnelements = document.getElementsByClassName('button');
    for (let i = 0; i < btnelements.length; i++) {
        btnelements[i].style.color = "lightgray";
        btnelements[i].style.backgroundColor = "white";
        btnelements[i].style.borderColor = "lightblue";
        btnelements[i].style.cursor = "default";
    }

    let elementtrue1 = document.querySelector('.hidden-true1');
    elementtrue1.style.display = "block";

    let elementtrue2 = document.querySelector('.hidden-true2');
    elementtrue2.style.display = "block";

    let elementtrue3 = document.querySelector('.hidden-true3');
    elementtrue3.style.display = "block";
}
//*********************************************** 
function showAnswer(trueanswer, el1, el2, el3, wronganswer, altr, altr2) {
    if (document.getElementById('answer').innerHTML !== '') {
        if (document.getElementById('answer').innerHTML == trueanswer) {
            if (document.getElementById(el1).style.color !== "black") {
                document.getElementById(el1).style.color = "black";
                document.getElementById(el1).innerHTML = altr;
                document.getElementById(el2).style.display = "block";
                document.getElementById('answer').innerHTML = '';
            }
        } else if (document.getElementById('answer').innerHTML == wronganswer) {
            if (document.getElementById(el1).style.color !== "black") {
                document.getElementById(el1).style.color = "black";
                document.getElementById(el1).innerHTML = altr2;
                document.getElementById(el1).classList.toggle("animate-letter");
                document.getElementById('answer').innerHTML = '';
                document.getElementById(el3).classList.toggle("true-animate");
                setTimeout(() => {
                    document.getElementById(el1).innerHTML = altr;
                    document.getElementById(el1).style.color = "white";
                    document.getElementById(el1).classList.toggle("animate-letter");
                    document.getElementById(el3).classList.toggle("true-animate");
                }, 1000);
            }
        }
    }
}
//*********************************************** 
function showHelp() {
    let modaloverlayhelp = document.getElementById("overlay-help");
    modaloverlayhelp.style.display = "block";

    let modalhelp = document.getElementById("helpModal");
    modalhelp.style.display = "block";
}

function closeHelp() {
    let modaloverlayhelp = document.getElementById("overlay-help");
    modaloverlayhelp.style.display = "none";

    let modalhelp = document.getElementById("helpModal");
    modalhelp.style.display = "none";
}
//*************************************************
function showR() {
    let modaloverlayresource = document.getElementById("overlay-resource");
    modaloverlayresource.style.display = "block";

    let modalresource = document.getElementById("resourceModal");
    modalresource.style.display = "block";
}

function closeResource() {
    let modaloverlayresource = document.getElementById("overlay-resource");
    modaloverlayresource.style.display = "none";

    let modalresource = document.getElementById("resourceModal");
    modalresource.style.display = "none";
}

//*********************************************** 
