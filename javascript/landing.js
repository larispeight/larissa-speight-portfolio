document.querySelectorAll(".design-button").forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "design.html";
  });
});

document.querySelectorAll(".web-button").forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "web.html";
  });
});

document.querySelectorAll(".home-button").forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});