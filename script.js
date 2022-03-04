function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};

window.addEventListener('scroll' , () => {
    let header = document.querySelector('.headnav')
    header.classList.toggle('scroll_headnav_active', window.scrollY > 0)
    intro_section = document.querySelector('.intro_section')
    intro_section.classList.toggle('scroll_intro_active', window.scrollY > 300)
})

let sideNav_btn = document.querySelector('.sideNav_btn')

sideNav_btn.addEventListener('click', () => {
    let side_nav = document.querySelector('.side_nav')
    side_nav.classList.toggle('side_nav_out')

})