document.addEventListener("DOMContentLoaded", function() {
    var box = document.querySelector(".box");
    var animationTrigger = document.getElementById("animation-trigger");

    // Add a class to start the animation
    animationTrigger.addEventListener("animationstart", function() {
        box.classList.add("show");
    });

    // Trigger the animation
    animationTrigger.classList.add("animate");
});
