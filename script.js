function showRecipeDetails() {
  var details = document.getElementById("recipeDetails");
  details.style.display = details.style.display === "none" ? "block" : "none";
}

function toggleMenu() {
  var nav = document.querySelector("nav ul");
  nav.style.display = nav.style.display === "none" ? "block" : "none";
}

// Close the menu when a navigation link is clicked
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("nav ul").style.display = "none";
  });
});
