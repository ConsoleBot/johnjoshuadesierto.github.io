$(document).ready(function () {
  console.log("ready!");
  $(window).resize(function () {
    if ($(this).width() > 992) {
      $('.nav-right-container').css({ display: 'flex' });
      $('.nav-right-container').css({ opacity: 1, height: '115px' });
    } else {
      if (!$('.nav-right-container').hasClass('open')) {
        $('.nav-right-container').css({ opacity: 0, height: '0' });
        $('.nav-right-container').css({ display: 'none' });
      } else {
        $('.nav-right-container').css({ display: 'flex' });
        $('.nav-right-container').css({ opacity: 1, height: '90px' });
      }
    }
  });

  $('.nav-trigger').unbind('click');
  $('.nav-trigger').click(function () {
    if (!$('.nav-right-container').hasClass('open')) {
      $('.nav-right-container').addClass('open');
      $('.nav-right-container').css({ display: 'flex' });
      $(this).find('i').removeClass('fa-bars').addClass('fa-times');

      setTimeout(function () {
        $('.nav-right-container').css({ opacity: 1, height: '115px' });
      }, 100)
    } else {
      $('.nav-right-container').css({ height: '0' });
      $(this).find('i').removeClass('fa-times').addClass('fa-bars');

      setTimeout(function () {
        $('.nav-right-container').removeClass('open');
        $('.nav-right-container').css({ display: 'none' });
        $('.nav-right-container').css({ opacity: 0 });
      }, 300)
    }

  })
});