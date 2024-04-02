document.getElementById("para").textContent="This is the 1st paragraph";

document.querySelector("#box").textContent="This inside the box";

// Write JS code to insert text "Fruit Juice" in the 3rd li above
// document.querySelector("ul li:last-child").textContent="Fruit Juice";

document.querySelector("ul li:last-child").textContent="Fruit Juice";

document.getElementById("circle").addEventListener("mouseenter", function(){
  document.getElementById("output").textContent = "The mouse is now inside the circle";
})

document.getElementById("circle").addEventListener("mouseleave", function(){
  document.getElementById("output").textContent = "The mouse is now outside the circle";
})

document.getElementById("circle").addEventListener("mouseup", function(){
  document.getElementById("output").textContent = "You released the mouse click!";
})

document.getElementById("circle").addEventListener("mousedown", function(){
  document.getElementById("output").textContent = "You clicked on the circle";
})


// Adding text to div with id box when window is resized
window.addEventListener("resize", function() {

  // document.getElementById("dimensions").textContent = "Currently, your window size is: " + window.innerWidth + "px x " + window.innerHeight + "px.";
  
      document.getElementById("dimensions").textContent = window.innerWidth + "px " + " by " + window.innerHeight + "px";
});

//ADD interactivity to webpage

document.getElementById("change").addEventListener("click", function(){
//  document.getElementById("circle").style.backgroundColor = "red";
//   document.getElementById("circle").style.width = "100px";          document.getElementById("circle").style.height = "100px";
 
  document.getElementById("circle").classList.add("small");
 //document.getElementById("circle").classList.remove("small");
});

document.getElementById("revert").addEventListener("click", function(){
  document.getElementById("circle").classList.remove("small");

});