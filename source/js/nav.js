// //Navigation toggle
// var navActive = false,
var displayList = document.querySelector(".display-list"),
    displayGrid = document.querySelector(".display-grid"),
    showDescription = document.querySelector(".toggle-descriptions"),
    grid = document.querySelector(".content-grid"),
    descriptionShown = false;

displayList.addEventListener("click", function(event){
	event.preventDefault();
  displayList.classList.add("active");
  displayGrid.classList.remove("active");
  grid.classList.add("list-row");
  grid.classList.remove("grid-row");
});

displayGrid.addEventListener("click", function(event){
	event.preventDefault();
  displayGrid.classList.add("active");
  displayList.classList.remove("active");
  grid.classList.add("grid-row");
  grid.classList.remove("list-row");
});

showDescription.addEventListener("click", function(event){
  console.log('clicked');
  if (showDescription.getAttribute('checked') !== "checked") {
    grid.classList.add("hide-description");
  }
  if (showDescription.getAttribute('checked') === "checked") {
    grid.classList.remove("hide-description");
  }
});
