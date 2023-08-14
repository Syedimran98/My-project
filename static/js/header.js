if (window.innerWidth > 992) {
 document.getElementById("js-year").innerHTML = new Date().getFullYear();
  $(document).ready(function() {
    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    }, function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
    });
  });
}
