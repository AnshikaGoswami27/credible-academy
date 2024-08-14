
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#555';
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
  
  var navLinks = document.querySelectorAll('#navbar a');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseenter', function() {
      this.style.color = '#ff9900'; 
    });
  
    navLink.addEventListener('mouseleave', function() {
      this.style.color = '#fff'; 
    });
  });
  