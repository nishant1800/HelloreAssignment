// Form Validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  }

  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
    emailError.textContent = 'Enter a valid email';
    valid = false;
  }

  if (message.value.trim() === '') {
    messageError.textContent = 'Message is required';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});