// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload g= () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id 'current-year'
// document.getElementById('current-year').textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
  const heroName = document.querySelector('.hero-name');
  
  function startAnimation() {
    heroName.classList.add('typing');
    heroName.classList.remove('reverse-typing');
    
    setTimeout(() => {
      heroName.classList.remove('typing');
      heroName.classList.add('reverse-typing');
      
      setTimeout(() => {
        startAnimation(); // Ulangi animasi
      }, 3000); // Jeda setelah animasi reverse-typing selesai
    }, 4000); // Jeda setelah animasi typing selesai
  }

  startAnimation(); // Mulai animasi saat halaman dimuat
});
