

//===== EXPANDER MENU  =====
const showMenu = (toggleId, navbarId, bodyId)=>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId) 
  navbar.classList.toggle('expander')  
}
showMenu('nav-toggle','navbar','body-pd')


//===== COLLAPSE MENU  =====
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++){
  linkCollapse[i].addEventListener('click', function(){
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}

/*
// Add click event listener to the airplane marker to toggle the sidebar
    airplaneMarker.on('click', function() {			
		const navbar = document.querySelector(".l-navbar");
			if (navbar.style.display === "none") {
				navbar.style.display = "flex";
			} else {
				navbar.style.display = "none";
			  }
        });
*/

// The commented out code above was used to replace the commented out one below, the commented out one above was also moved to the plotAirportsOnMap.js file 

/*
// Code for airplane button to turn on and off the sidebar 
const navbar = document.querySelector(".l-navbar");
const toggleAirplaneButton = document.querySelector("#toggleAirplaneButton");

toggleAirplaneButton.addEventListener("click", function() {
  if (navbar.style.display === "none") {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});
*/