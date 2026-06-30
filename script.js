const loginButton=document.getElementById("loginButton");const studentLoginButton=document.getElementById("studentLoginButton");const contactForm=document.querySelector(".contact-form");function showLoginMessage(){alert("Redirecting to Student Login...")}if(loginButton){loginButton.addEventListener("click",showLoginMessage)}if(studentLoginButton){studentLoginButton.addEventListener("click",showLoginMessage)}if(contactForm){contactForm.addEventListener("submit",event=>{event.preventDefault();if(!contactForm.checkValidity()){event.stopPropagation();contactForm.classList.add("was-validated");return}alert("Thank you! Your message has been submitted.");contactForm.reset();contactForm.classList.remove("was-validated")})}

if (!window.bootstrap) {
  document.querySelectorAll('.navbar-toggler').forEach((button) => {
    const target = document.querySelector(button.getAttribute('data-bs-target'));
    button.addEventListener('click', () => target?.classList.toggle('show'));
  });

  document.querySelectorAll('[data-bs-toggle="modal"]').forEach((button) => {
    const target = document.querySelector(button.getAttribute('data-bs-target'));
    button.addEventListener('click', () => target?.classList.add('show'));
  });

  document.querySelectorAll('[data-bs-dismiss="modal"], .btn-close').forEach((button) => {
    button.addEventListener('click', () => button.closest('.modal')?.classList.remove('show'));
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) modal.classList.remove('show');
    });
  });

  document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.getAttribute('data-bs-target'));
      const parent = button.closest('.accordion');
      parent?.querySelectorAll('.accordion-collapse.show').forEach((openPanel) => {
        if (openPanel !== target) openPanel.classList.remove('show');
      });
      target?.classList.toggle('show');
      button.classList.toggle('collapsed');
    });
  });

  document.querySelectorAll('.carousel').forEach((carousel) => {
    const items = [...carousel.querySelectorAll('.carousel-item')];
    const indicators = [...carousel.querySelectorAll('.carousel-indicators button')];
    let activeIndex = Math.max(0, items.findIndex((item) => item.classList.contains('active')));
    const showSlide = (index) => {
      activeIndex = (index + items.length) % items.length;
      items.forEach((item, itemIndex) => item.classList.toggle('active', itemIndex === activeIndex));
      indicators.forEach((indicator, itemIndex) => indicator.classList.toggle('active', itemIndex === activeIndex));
    };
    carousel.querySelector('.carousel-control-prev')?.addEventListener('click', () => showSlide(activeIndex - 1));
    carousel.querySelector('.carousel-control-next')?.addEventListener('click', () => showSlide(activeIndex + 1));
    indicators.forEach((indicator, index) => indicator.addEventListener('click', () => showSlide(index)));
    window.setInterval(() => showSlide(activeIndex + 1), 5000);
  });
}