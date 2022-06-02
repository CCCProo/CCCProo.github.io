	$(function () {
  $('#cal').click(function (e) {
    e.preventDefault();
    $('.modal8').addClass('modal_active8');
    $('body').addClass('hidden');
  });

  $('.modal__close-button8').click(function (e) {
    e.preventDefault();
    $('.modal8').removeClass('modal_active8');
    $('body').removeClass('hidden');
  });

  $('.modal8').mouseup(function (e) {
    let modalContent = $(".modal__content8");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active8');
      $('body').removeClass('hidden');
    }
  });
});