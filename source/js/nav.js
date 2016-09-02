// //Navigation toggle
// var navActive = false,
var displayList = document.querySelector(".display-list"),
    displayGrid = document.querySelector(".display-grid"),
    showDescription = document.querySelector(".toggle-descriptions"),
    grid = document.querySelector(".content-grid"),
    fieldsetLegend = document.querySelector(".collapse-toggle"),
    filterShowHide = document.querySelector(".filterShowHide"),
    burgerMenu = document.querySelector(".mobile-nav__burger"),
    closeMenu = document.querySelector(".mobile-nav__close"),
    mobileMenu = document.querySelector(".menu-mobile");


if (displayList) displayList.addEventListener("click", function(event){
	event.preventDefault();
  displayList.classList.add("active");
  displayGrid.classList.remove("active");
  grid.classList.add("list-row");
  grid.classList.remove("grid-row");
});

if (displayGrid) displayGrid.addEventListener("click", function(event){
	event.preventDefault();
  displayGrid.classList.add("active");
  displayList.classList.remove("active");
  grid.classList.add("grid-row");
  grid.classList.remove("list-row");
});

if (showDescription) showDescription.addEventListener("change", function(event){
  if (showDescription.getAttribute("show") === "true") {
    grid.classList.remove("hide-description");
    showDescription.setAttribute("show", "false");
  } else {
    grid.classList.add("hide-description");
    showDescription.setAttribute("show", "true");
  }
});

if (fieldsetLegend) fieldsetLegend.addEventListener("click", function(event){
  if (fieldsetLegend.getAttribute("collapsed") === "true") {
    fieldsetLegend.parentNode.parentNode.classList.remove("collapsed");
    fieldsetLegend.setAttribute("collapsed", "");
  } else {
    fieldsetLegend.parentNode.parentNode.classList.add("collapsed");
    fieldsetLegend.setAttribute("collapsed", "true");
  }
});

if (filterShowHide) filterShowHide.addEventListener("click", function(event){
  if (filterShowHide.getAttribute("visible") === "true") {
    filterShowHide.parentNode.classList.remove("show");
    filterShowHide.setAttribute("visible", "");
  } else {
    filterShowHide.parentNode.classList.add("show");
    filterShowHide.setAttribute("visible", "true");
  }
});

if (burgerMenu) burgerMenu.addEventListener("click", function(event){
  if (burgerMenu.getAttribute("visible") !== "true") {
    mobileMenu.classList.add("show");
    burgerMenu.setAttribute("visible", "true");
  } else {
    mobileMenu.classList.remove("show");
    burgerMenu.setAttribute("visible", "");
  }
});

if (closeMenu) closeMenu.addEventListener("click", function(event){
    mobileMenu.classList.remove("show");
    burgerMenu.setAttribute("visible", "");
});
