// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
// app/assets/javascripts/live_alert.js

document.addEventListener('DOMContentLoaded', function() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  
    function appendAlert(message, type) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
          <div>${message}</div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
      alertPlaceholder.appendChild(wrapper);
    }
  
    const alertTrigger = document.getElementById('liveAlertBtn');
    if (alertTrigger) {
      alertTrigger.addEventListener('click', function() {
        appendAlert('Nice, you triggered this alert message!', 'success');
      });
    }
  });
  