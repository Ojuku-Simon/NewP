document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
  
    function showImages() {
      imageContainers.forEach((container, index) => {
        setTimeout(() => {
          container.style.opacity = 1;
        }, index * 1000); 
      });
    }
  
    function hideImages() {
      imageContainers.forEach((container) => {
        container.style.opacity = 0;
      });
    }
  
    // Initial cycle
    showImages();
  
    // Set an interval for the continuous cycle
    setInterval(() => {
      hideImages();
      setTimeout(() => {
        showImages();
      }, 1000);
    }, 8000); 
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        // Show the button when the user scrolls down 20px from the top
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        // Scroll to the top smoothly when the button is clicked
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
