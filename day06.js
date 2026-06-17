console.log("hello JS");

function changeColor() {
  let tka = document.querySelector("#one");

  if (tka.innerHTML == "Welcome to Day 06") {
    tka.innerHTML = "Change by JavaScript";
    tka.style.backgroundColor = "red";
  } else if (tka.innerHTML == "Change by JavaScript") {
    tka.innerHTML = "DOM in JS";
    tka.style.backgroundColor = "blue";
  } else {
    tka.innerHTML = "Welcome to Day 06";
    tka.style.backgroundColor = "yellow";
  }

  console.log("change function invoked...");
}

// data types & keywords
// variables
// functions ,  inbuilt functions
// operators
// control statements :   1) conditional , 2) looping
// arrays, string,
// OOP

// dynamic web page contents
// validation

// it is a basic scripting languauge used to achieve dynamic content for web page
