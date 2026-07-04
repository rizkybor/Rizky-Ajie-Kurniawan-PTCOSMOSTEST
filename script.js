/* Catatan: file ini sengaja ditulis dengan jQuery + ES5 saja
   (var, function biasa) supaya jalan mulus di IE11.
   Hindari: arrow function, let/const, template literal, dsb
   kalau mau nambah script baru di file ini. */

$(function () {
  "use strict";

  // Smooth scroll untuk semua anchor link internal, KECUALI tab pill (data-toggle="pill")
  // dan tombol carousel (data-slide) yang punya perilaku sendiri.
  // scroll-behavior:smooth di CSS tidak didukung IE11, jadi dipakai jQuery animate.
  $('a[href^="#"]').not('[data-toggle="pill"], [data-slide]').on('click', function (e) {
    var targetId = $(this).attr('href');
    if (!targetId || targetId === '#') { return; }
    var $target = $(targetId);
    if ($target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $target.offset().top - 70 }, 500);
    }
  });

  var $carousel = $('#projectsCarousel');
  var $indicators = $('.carousel-indicators-custom li');

  // klik indikator custom -> pindah slide carousel Bootstrap
  $indicators.on('click', function () {
    var index = $(this).data('slide-to');
    $carousel.carousel(index);
  });

  // saat slide berganti, update indikator custom yang aktif
  $carousel.on('slid.bs.carousel', function (e) {
    var activeIndex = $(e.target).find('.carousel-item').index($(e.target).find('.carousel-item.active'));
    $indicators.removeClass('active').eq(activeIndex).addClass('active');
  });
});
