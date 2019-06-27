$('.mobile-toggle').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
    $('.content').toggleClass('active');
});

$('.menu a').on('click', function (e) {
    $('.menu').toggleClass('active');
    $('.content').toggleClass('active');
    $('.mobile-toggle').toggleClass('active');
});

$('.mobile-toggle').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('active');
});
