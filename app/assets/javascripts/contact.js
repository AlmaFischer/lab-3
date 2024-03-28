document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const liveAlertBtn = document.getElementById('liveAlertBtn');

  contactForm.addEventListener('input', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name !== '' && email !== '' && message !== '') {
      liveAlertBtn.disabled = false;
    } else {
      liveAlertBtn.disabled = true;
    }
  });

  liveAlertBtn.addEventListener('click', function() {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success');
    alert.textContent = 'We are contacting you soon!';

    document.getElementById('liveAlertPlaceholder').appendChild(alert);

    setTimeout(function() {
      alert.remove();
    }, 3000); // Remove alert after 3 seconds
  });
});