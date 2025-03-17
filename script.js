var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

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
L1.forEach(checkFruit);

function checkFruit(fruit) {
    if (fruit == "Banana") {
        alert("We found a banana in the first array");
    }
}

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();

    if (h < 5 || 20 < h) {
        dynamic.innerHTML = ("Good night, I am Truanne!");
    } else if (h < 12) {
        dynamic.innerHTML = ("Good morning, I am Truanne!");
    } else if (h < 18) {
        dynamic.innerHTML =("Good afernoon, I am Truanne!");
    } else if (h < 20) {
        dynamic.innerHTML = ("Good evening, I am Truanne!");
    }
}

console.log(window.location.href)
if (window.location.href == "index.html") {
    greetingFunc();
}
