document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.querySelector(".cookie-banner");
    const acceptButton = document.querySelector(".control-button.primary");
    const declineButton = document.querySelector(".control-button");
  
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  
   
    const cookieConsent = getCookie("cookieConsent");
    if (!cookieConsent) {
      cookieBanner.style.display = "block"; 
    }
  

    acceptButton.addEventListener("click", function() {
      setCookie("cookieConsent", "accepted", 365);
      cookieBanner.style.display = "none";
    
    });

    declineButton.addEventListener("click", function() {
      setCookie("cookieConsent", "declined", 365); 
      cookieBanner.style.display = "none";
    });
  });
  