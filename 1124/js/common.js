$(function() {
    $(".sub").hide();
    $(".main>li").mouseover(function() {
        $(".sub", this).show();
        $(".sub_bg").css("background-color", "rgba(225, 225, 225, 0.8)");
        $(".dd", this).addClass("add");

    });
    $(".main>li").mouseout(function() {
        $(".sub", this).hide();
        $(".sub_bg").css("background-color", "");
        $(".dd", this).removeClass("add");
    });
});
