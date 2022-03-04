$(document).ready(function () {
    $('.home_btn').click(function () {
        $('.about').css('display', 'none')
        $('.education').css('display', 'none')
        $('.projects').css('display', 'none')
        $('.bg_img').addClass('bg_img_animation')
        $('.home').fadeIn(1500)
    })
    $('.about_btn').click(function () {
        $('.home').css('display', 'none')
        $('.education').css('display', 'none')
        $('.projects').css('display', 'none')
        $('.bg_img').addClass('bg_img_animation')
        $('.about').fadeIn(1500)
    })
    $('.education_btn').click(function () {
        $('.home').css('display', 'none')
        $('.about').css('display', 'none')
        $('.projects').css('display', 'none')
        $('.bg_img').addClass('bg_img_animation')
        $('.education').fadeIn(1500)
    })
    $('.projects_btn').click(function () {
        $('.home').css('display', 'none')
        $('.education').css('display', 'none')
        $('.about').css('display', 'none')
        $('.bg_img').addClass('bg_img_animation')
        $('.projects').fadeIn(1500)
    })
})
setInterval(() => {
    document.getElementById('bg_img').classList.remove('bg_img_animation')
}, 3000);