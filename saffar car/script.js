  // Logo and name animation on page load
    window.onload = () => {
      document.querySelector('.animated-logo').classList.add('logo-bounce');
      document.querySelector('.animated-text').classList.add('text-glow');
      // Car cards animation
      document.querySelectorAll('.animate-car').forEach((card, i) => {
        setTimeout(() => card.classList.add('car-fadein'), 200 + i * 250);
      });
    };



    document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let current = 0;
    let interval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
      current = index;
    }

    function nextSlide() {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }

    function startAutoSlide() {
      interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
      clearInterval(interval);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(i);
        startAutoSlide();
      });
    });

    showSlide(current);
    startAutoSlide();
  });


//review section
  document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review-item');
    let currentIndex = 0;
    const totalReviews = reviews.length;

    setInterval(() => {
      // Hide current review
      reviews[currentIndex].classList.remove('active');

      // Calculate next index
      currentIndex = (currentIndex + 1) % totalReviews;

      // Show next review
      reviews[currentIndex].classList.add('active');
    }, 3000); // 2000ms = 2 seconds
  });

    // Simple form submission handlers
   
   const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for booking with Saffar Car!');
});

  
 

 // AM/PM Toggle Functionality
    document.querySelectorAll('.ampm-toggle').forEach(toggleGroup => {
      const buttons = toggleGroup.querySelectorAll('button');
      const hiddenInput = toggleGroup.parentElement.querySelector('input[type="hidden"]');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          if (hiddenInput) hiddenInput.value = button.textContent.trim();
        });
        button.addEventListener('keydown', e => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const next = button.nextElementSibling || buttons[0];
            next.focus();
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = button.previousElementSibling || buttons[buttons.length - 1];
            prev.focus();
          }
        });
      });
    });



    // Form Submission (Demo)
    document.getElementById('rentalForm').addEventListener('submit', function(e) {
      e.preventDefault();
      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }
      // You can process the data here or send to server
      alert('Reservation submitted successfully!');
      this.reset();
      // Reset AM/PM toggles to AM after form reset
      document.querySelectorAll('.ampm-toggle').forEach(toggleGroup => {
        const buttons = toggleGroup.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[0].classList.add('active');
        const hiddenInput = toggleGroup.parentElement.querySelector('input[type="hidden"]');
        if (hiddenInput) hiddenInput.value = "AM";
      });
    });