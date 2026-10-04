// ===== Sidebar: buka/tutup =====
$("#sidebarToggle, #sidebarToggleTop").on("click", function () {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
});

// ===== Tombol scroll ke atas: muncul kalau halaman sudah di-scroll =====
$(document).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $(".scroll-to-top").fadeIn();
    } else {
        $(".scroll-to-top").fadeOut();
    }
});

$(".scroll-to-top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
});
