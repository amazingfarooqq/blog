let tips = document.getElementById('tips')

const tipsData = [
    {
        stack: 'JAVASCRIPT',
        title: 'Fixed Decimal Number',
        desc: 'You ca fix decimal number by using toFixed() JavScript Function.',
        imgUrl: '../imgs/tips/js2.jpg'
    },
    {
        stack: 'HTML',
        title: 'First Tip',
        desc: 'This is how you find fixed decimal number',
        imgUrl: '../imgs/tips/js2.jpg'
    },
    {
        stack: 'HTML',
        title: 'First Tip',
        desc: 'This is how you find fixed decimal number',
        imgUrl: '../imgs/tips/js2.jpg'
    },
    {
        stack: 'HTML',
        title: 'First Tip',
        desc: 'This is how you find fixed decimal number',
        imgUrl: '../imgs/tips/js2.jpg'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'First Tip',
        desc: 'This is how you find fixed decimal number',
        imgUrl: '../imgs/tips/js2.jpg'
    },
    {
        stack: 'CSS',
        title: 'second tip',
        desc: 'this is how you find fixed decimal number',
        imgUrl: '../imgs/tips/js2.jpg'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'third tip',
        desc: 'this is how you find fixed decimal number',
        imgUrl: '../imgs/tips/js2.jpg'
    },
    {
        stack: 'JAVASCRIPT',
        title: 'third tip',
        desc: 'this is how you find fixed decimal number',
        imgUrl: '../imgs/tips/js2.jpg'
    }
]




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

window.addEventListener('scroll', () => {
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


const d = 'farooq'

const ALL = () => {

    tips.innerHTML = ''
    tipsData.map(tip => {
        tips.innerHTML += `<div class="col-11 col-md-5 m-2 bg-dark -2 tipCard text-light pt-2" style="border-radius: 6px;">
        <h6 class="stack m-0 p-0 text-primary" style="font-size: 13px;">${tip.stack}</h6>
        <h5 class="tip_title m-0 p-0">${tip.title}</h5>
        <p class="m-0 text-warning">${tip.desc}</p>
        <img class="img-fluid tip_img" src="${tip.imgUrl}" alt="img">
        <div/>`
    })
}

ALL()


const HTML_tips = () => {
    tips.innerHTML = ''
    let HTML_filter = tipsData.filter(tip => tip.stack === 'HTML')
    HTML_filter.map(tip => {
        tips.innerHTML += `<div class="col-11 col-md-5 m-2 bg-dark -2 tipCard text-light pt-2" style="border-radius: 6px;">
        <h6 class="stack m-0 p-0 text-primary" style="font-size: 13px;">${tip.stack}</h6>
        <h5 class="tip_title m-0 p-0">${tip.title}</h5>
        <p class="m-0 text-warning">${tip.desc}</p>
        <img class="img-fluid tip_img" src="${tip.imgUrl}" alt="img">
    </div>`
    })
}
const CSS_tips = () => {
    tips.innerHTML = ''
    let CSS_filter = tipsData.filter(tip => tip.stack === 'CSS')
    CSS_filter.map(tip => {
        tips.innerHTML += `<div class="col-11 col-md-5 m-2 bg-dark -2 tipCard text-light pt-2" style="border-radius: 6px;">
        <h6 class="stack m-0 p-0 text-primary" style="font-size: 13px;">${tip.stack}</h6>
        <h5 class="tip_title m-0 p-0">${tip.title}</h5>
        <p class="m-0 text-warning">${tip.desc}</p>
        <img class="img-fluid tip_img" src="${tip.imgUrl}" alt="img">
    </div>`
    })
}
const JAVASCRIPT_tips = () => {
    tips.innerHTML = ''
    let JAVASCRIPT_filter = tipsData.filter(tip => tip.stack === 'JAVASCRIPT')
    JAVASCRIPT_filter.map(tip => {
        tips.innerHTML += `<div class="col-11 col-md-5 m-2 bg-dark -2 tipCard text-light pt-2" style="border-radius: 6px;">
        <h6 class="stack m-0 p-0 text-primary" style="font-size: 13px;">${tip.stack}</h6>
        <h5 class="tip_title m-0 p-0">${tip.title}</h5>
        <p class="m-0 text-warning">${tip.desc}</p>
        <img class="img-fluid tip_img" src="${tip.imgUrl}" alt="img">
    </div>`
    })
}


let data = document.getElementsByClassName('data')

//get input
let input = document.getElementById("search_tip_button");
//get list of value
let tipCard = document.querySelectorAll(".tips .tipCard");
let tipTitle = document.querySelectorAll(".tips .tipCard .tip_title");

//function search on the list.
function search() {
    for (let i = 0; i < tipTitle.length; i++) {
        //check if the element contains the value of the input
        if (tipTitle[i].innerText.toLowerCase().includes(input.value.toLowerCase())) {
            tipCard[i].style.display = "block";
        } else {
            tipCard[i].style.display = "none";
        }
    }
}

//to the change run search.
input.addEventListener('input', search);





