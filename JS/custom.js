

$(document).ready(function(){
    $('.catalog-ruzik').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: true,
        lazyLoad: 'ondemand',
        mobileFirst: true
    });
  });

  $(document).ready(function(){
    $('.catalog-cheshki').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        lazyLoad: 'ondemand',
        mobileFirst: true
    });
  });
