<!--卖萌-->
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/TEP.ico");
        document.title = ' 别离开我 ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = ' 我就知道你会回来的 ';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});