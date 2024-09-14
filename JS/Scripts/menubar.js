  //Menu bar toggle
    let mainNav = document.getElementById("js-menu");
    let navBarToggle = document.getElementById("js-navbar-toggle");

    navBarToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
    });


    // Form validation and submission

    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const number = document.getElementById('number').value.trim();
      const message = document.getElementById('mssg').value.trim();
  
      if (name === '' || email === '' || number === '' || message === '') {
        alert('Please fill all the fields.');
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
      }
  
      alert('Form submitted successfully!');
      form.reset();
    });
  
    // Email validation
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }