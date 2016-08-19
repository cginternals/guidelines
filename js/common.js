 $(function() {

  $(document).on('click','.js-select-all', function() { 
    this.select(); 
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scroll-to-top-button').fadeIn();
    } else {
        $('.scroll-to-top-button').fadeOut();
    }
  });

  $('.scroll-to-top-button').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 300);
    return false;
  });
    
});
