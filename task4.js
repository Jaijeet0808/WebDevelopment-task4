document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusDiv = document.getElementById('formStatus');
  
    if(name && email && message) {
      statusDiv.textContent = 'Message sent successfully!';
      statusDiv.style.color = 'green';
      this.reset();
    } else {
      statusDiv.textContent = 'Please fill all fields.';
      statusDiv.style.color = 'red';
    }
  });
  