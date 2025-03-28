

// PREVIOUS LAB CODE //

// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);
// var A = "Hello ";
// var B = "world!";
// var C = A + B;
// console.log(C);

// function SumNPrint(x1, x2) {
//     var x3 = x1 + x2;
//     console.log(x3);
// }

// SumNPrint(x, y);
// SumNPrint(A, B);

// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }

// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

//first implementation of the function
// function findTheBanana(fruitList) {
//     for (let i = 0; i < fruitList.length; i++) {
//         if (fruitList[i] == "Banana") {
//             alert("found the banana in " + i);
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

//second implementation of the function
// L1.forEach(checkFruit);

// function checkFruit(fruit) {
//     if (fruit == "Banana") {
//         alert("We found a banana in the first array");
//     }
// }

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();

    if (h < 5 || 20 < h) {
        dynamic.innerHTML = ("Good night, I am Truanne!");
    } else if (h < 12) {
        dynamic.innerHTML = ("Good morning, I am Truanne!");
    } else if (h < 18) {
        dynamic.innerHTML =("Good afternoon, I am Truanne!");
    } else if (h < 20) {
        dynamic.innerHTML = ("Good evening, I am Truanne!");
    }
}

var loc = window.location.href;

if (loc.includes("index.html"))
{
    greetingFunc();
}

function addYear() {
    var a = new Date();
    var shown = a.getFullYear();
    console.log(shown + "designed and coded by Truanne Chen &copy;");
    copyYear.innerHTML = (shown + " designed and coded by Truanne Chen &copy;");
}

// function showList() {
//     document.getElementById("seeMoreButton").style.display = "none";
//     document.getElementById("funList").style.display = "block";
// }

function showMore() {
    console.log("cliked read more button")
    $("#readMore").hide();
    $("#intro").show();
    $("#introShort").hide();
    $("#readLess").show();
}
function showLess() {
    $("#readMore").show();
    $("#intro").hide();
    $("#introShort").show();
    $("#readLess").hide();
}

function checkForm() {
    if (document.getElementById("nameField").checkValidity() == false) {
        document.getElementById("seeMoreButton").style.display = "block";
        $("#errorMessage").show();
    }
    if (document.getElementById("emailField").checkValidity() == false) {
        $("#errorMessage").show();
    }
    if (document.getElementById("commentArea").checkValidity()== false) {
        $("#errorMessage").show();
    }
}


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById('adviceText').innerText = advice;
        })
        .catch(error => {
            console.error('Error fetching:', error);
            document.getElementById('adviceText').innerText = 'Error! Please try again later.';
        });
}



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        console.log("active");
    });
});

var loc = window.location.href;
listItems = [document.getElementsByTagName('li')];
links = [document.getElementsByTagName('a')];

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page path
    const currentPath = window.location.pathname;

    // Select all navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        // Compare link href with the current path
        const linkPath = new URL(link.href).pathname;

        const isHome = linkPath.endsWith("index.html" && (currentPath === "/" || currentPath.endsWith("index.html")));
        if (linkPath === currentPath || isHome) {
            link.classList.add("active");
        }
    });
});