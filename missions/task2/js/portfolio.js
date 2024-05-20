$(document).ready(function() {
    // $('.pagination button:first-child').addClass('currPage');

    $('.pagination button').click(function() {
        $('.pagination button').removeClass('currPage');
        $(this).addClass('currPage');
    });
});
