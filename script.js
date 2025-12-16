// Select all slides
const slides = document.querySelectorAll(".ppt-slide");

// Click to maximize
slides.forEach(slide => {
  slide.addEventListener("click", () => {

    // Close other slides
    slides.forEach(s => s.classList.remove("active"));

    // Toggle fullscreen
    slide.classList.toggle("active");
  });
});

// ESC key to exit fullscreen
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    slides.forEach(slide => slide.classList.remove("active"));
  }
});
