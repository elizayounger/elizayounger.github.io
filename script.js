// --------TOGGLE MENU-------- 
function toggleMenu() {
  const toggleMenu = document.getElementById("hamburger-nav");
  toggleMenu.classList.toggle("open"); // Adds or removes the 'open' class
}

function toggleSkillsOverview() {
  const grid = document.getElementsByClassName("grid");
  const arrow = document.getElementsByClassName("arrow");

  for (let projectGrid of grid) {
    // Toggle display of the grid
    if (projectGrid.style.display === "none") {
      projectGrid.style.display = "grid"; // Show the grid
    } else {
      projectGrid.style.display = "none"; // Hide the grid
    }
  }
  for (let projectArrow of arrow) {
    // Toggle display of the grid
    if (projectArrow.style.display === "none") {
      projectArrow.style.transform = "rotate(90deg)"; // Rotate arrow down
    } else {
      projectArrow.style.transform = "rotate(0deg)"; // Rotate arrow back
    }
  }
  
}
  
