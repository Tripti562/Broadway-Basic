// Adding text to div with id box using vanilla JS
document.getElementById("box").innerHTML = "<b>This text was added to div with id box via vanilla JS</b>";

// window.addEventListener("resize", function(){
// console.log("window has been reszied");
// });

// Adding text to div with id box when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll("ol#list li").forEach(li => li.textContent = "Text for list item");
 document.getElementById("bold-text").innerHTML = "<b>Bold Text for list item</b>";

});

// Adding text to div with id box when window is resized
window.addEventListener("resize", function() {
  document.getElementById("box").textContent = "You just resized your window";
  document.getElementById("box").insertAdjacentHTML("afterbegin", "<b>Hello User!</b><br/>");
  document.getElementById("box").insertAdjacentHTML("beforeend", "<p>Currently, your window size is: " + window.innerWidth + "px x " + window.innerHeight + "px.</p>");
});
// console.log("Currently, your window size is " + window.innerWidth + " ")

// ("#trigger-red")

// Changing background color and text color of div with id box when trigger-red button is clicked
document.getElementById("trigger-red").addEventListener("click", function() {
  document.getElementById("box").style.borderRadius = "40px";
  document.getElementById("box").style.color = "white";
  document.getElementById("box").style.backgroundColor="red";
  // document.getElementById("box").classList.add("active");
 
});

// Adding text to status class when mouse pointer enters, leaves or clicks inside the circle

  document.querySelector(".circle").addEventListener("mouseenter", function() {
    document.querySelector(".status").textContent = "Your mouse pointer is inside the circle";
  });
  
    document.querySelector(".circle").addEventListener("mouseleave", function() {
    document.querySelector(".status").textContent = "Your mouse pointer is outside the circle";
  });
  
    document.querySelector(".circle").addEventListener("mousedown", function() {
    document.querySelector(".status").textContent = "You clicked inside the circle!";
  });
  
    document.querySelector(".circle").addEventListener("mouseup", function() {
    document.querySelector(".status").textContent = "You released the mouse click!";
  });


// Fading out h1 and fading in h2 when hide button is clicked
document.querySelector(".hide").addEventListener("click", function() {
  document.querySelector("h1").style.transition = "opacity 1s";
  document.querySelector("h1").style.opacity = 0;
  setTimeout(function() {
    document.querySelector("h2").style.transition = "opacity 1s";
    document.querySelector("h2").style.opacity = 1;

  }, 1000);
});

// Toggling visibility of h3 element when toggle button is clicked
document.querySelector(".toggle").addEventListener("click", function() {
  document.querySelector("h3").style.display = (document.querySelector("h3").style.display === "none") ? "block" : "none";
 
});

var menuLinks = document.querySelectorAll('#menu li a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});
