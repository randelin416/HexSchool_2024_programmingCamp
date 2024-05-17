$(document).ready(function() {
    $('.btn').click(function() {
        $('.hamburger').toggle(50); // 切換菜單圖示顯示狀態
        $('.close').toggle(50); // 切換關閉圖示顯示狀態
        $('nav ul').slideToggle(300, 'swing');
    });
});
