/*eslint-env browser*/

//STEP 1
function alertFunction () {
   alert("I have been clicked");
}
//STEP 2
window.onload = function() {
    var button = document.getElementById("2049");
    button.onclick = alertFunction;
};
//STEP 3
window.onload = function() {
    var button = document.getElementById("part3");
    button.addEventListener("click", alertFunction);
};
//STEP 4
window.onload = function() {
    var button = document.getElementById("part4");
  
    button.addEventListener("click", function() {
        alert("I have been clicked using callback function");
    });
};
//STEP 5
//inside of html file!!
