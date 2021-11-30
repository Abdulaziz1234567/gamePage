$(function () {
    $('.current__box-hover').hide();
    $('.contacts__block').hide();
    $('.current__text').hide();
    $('.top').hide();
    $('.top4').hide();
    $('.apply').on('click', function () {
        $('.current__box-hover').slideDown(3000);
        $('.contacts__block').slideDown(3000);
    })
    $('.left_t').on('click', function () {
        $('.two').slideToggle(3000);
        $('.current__text').css({
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0'
        });
        $('.current__box').css({
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0'
        });
        $('.top3').toggle(1000);
        $('.top4').toggle(1000);
    })
    $('.one_l').on('click', function () {
        $('.one').slideToggle(3000);
        $('.top').toggle(1000);
        $('.top2').toggle(1000);
        $('.current__text').css({
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0'
        });

        $('.current__box').css({
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0'
        });
    })
    $('.exit').on('click', function () {
        $('.current__box-hover').slideUp(3000);
    })

})