// flag{QQ:378768535}
$('li a').click(function () {
     target = $(this).attr('goto');
     switchTo(target);
});
function switchTo(target) {
     $('.row section').each(function () {
         $(this).removeClass('active');
     });
     $(target).addClass('active');
}