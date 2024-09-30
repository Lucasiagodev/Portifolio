window.addEventListener('scroll', function() {
    var button = document.getElementById('myButton');
    var footer = document.getElementById('footer');
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition <= windowHeight) {
      button.style.display = 'none'; // Esconde o botão
    } else {
      button.style.display = 'block'; // Mostra o botão
    }
  });