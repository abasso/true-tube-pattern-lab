
// //Navigation toggle
// var navActive = false,
var displayList = document.querySelector(".display-list"),
    body = document.querySelector("body");
    displayGrid = document.querySelector(".display-grid"),
    showDescription = document.querySelector(".toggle-descriptions"),
    grid = document.querySelector(".content-grid"),
    fieldsetLegend = document.querySelector(".collapse-toggle"),
    filterShowHide = document.querySelector(".filter-show-hide"),
    burgerMenu = document.querySelector(".mobile-nav__burger"),
    closeMenu = document.querySelector(".mobile-nav__close"),
    mobileMenu = document.querySelector(".menu-mobile"),
    mobileSearch = document.querySelector(".mobile-nav__search"),
    desktopSearch = document.querySelector(".primary-nav__search"),
    desktopSearchInput = document.querySelector(".primary-nav__search-input");

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

if (filterShowHide) filterShowHide.addEventListener("click", function(event){
  if (filterShowHide.getAttribute("visible") === "true") {
    filterShowHide.parentNode.classList.remove("show");
    filterShowHide.setAttribute("visible", "");
  } else {
    filterShowHide.parentNode.classList.add("show");
    filterShowHide.setAttribute("visible", "true");
  }
});

$(".collapse-toggle").on("click", function() {
  if($(this).attr("collapsed") === "true") {
    $(this).parent().parent().removeClass("collapsed");
    $(this).attr("collapsed", "false");
  } else {
    $(this).parent().parent().addClass("collapsed");
    $(this).attr("collapsed", "true");
  }
});

if (burgerMenu) burgerMenu.addEventListener("click", function(event){
  if (burgerMenu.getAttribute("visible") !== "true") {
    mobileMenu.classList.add("show");
    burgerMenu.setAttribute("visible", "true");
    body.classList.add("fixed");
  } else {
    mobileMenu.classList.remove("show");
    burgerMenu.setAttribute("visible", "");
    body.classList.remove("fixed");
  }
});

if (mobileSearch) mobileSearch.addEventListener("click", function(event){
    mobileMenu.classList.add("show");
    burgerMenu.setAttribute("visible", "true");
    body.classList.add("fixed");
    desktopSearchInput.focus();
});

if (closeMenu) closeMenu.addEventListener("click", function(event){
    mobileMenu.classList.remove("show");
    burgerMenu.setAttribute("visible", "");
    body.classList.remove("fixed");
});

if(desktopSearchInput) desktopSearchInput.addEventListener("focus", function() {
  desktopSearch.classList.add("active");
});

if(desktopSearchInput) desktopSearchInput.addEventListener("blur", function() {
  desktopSearch.classList.remove("active");
});
