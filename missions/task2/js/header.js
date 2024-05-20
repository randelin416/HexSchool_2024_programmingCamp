$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() > 910) {
            $('nav ul').css('flex-direction', 'row').show();
            $('.hamburger').hide();
            $('.close').hide();
        } else {
            $('nav ul').css('flex-direction', 'column').hide();
            $('.hamburger').show();
            $('.close').hide();
        }
    }

    checkWidth(); // 初始化检查宽度

    $(window).resize(function() {
        checkWidth(); // 当窗口调整大小时再次检查
    });

    $('.btn').click(function() {
        $('.hamburger').toggle(50); // 切換菜單圖示顯示狀態
        $('.close').toggle(50); // 切換關閉圖示顯示狀態
        $('nav ul').slideToggle(300, 'swing');
    });
});
