// navigation

const menu = document.querySelector(".menu");
const nav = document.getElementById("navigasi");
const exit_button = document.getElementById("exit-btn");
const dj_1 = document.getElementById("dj_1");
const dj_2 = document.getElementById("dj_2");
const dj_3 = document.getElementById("dj_3");
const h1_title = document.getElementById("h1-title");
const header = document.getElementById("header");
const deco = document.getElementById("deco");
const deco1 = document.getElementById("deco1");
const deco2 = document.getElementById("deco2");
const deco3 = document.getElementById("deco3");
const deco4 = document.getElementById("deco4");

let cookie = JSON.parse(getCookie('cookie'));
if(!cookie){
    setCookie('cookie', false, 1);
}
else{
    nav.style.animation = "0.8s animasi_masuk ease-in forwards";
    nav.classList.add("show");
}
function setNav(){
    nav.classList.toggle("show");
    cookie = !cookie;
    setCookie('cookie', cookie, 1);
}
function setCookie(name, value, dayToLive){
    const date = new Date();
    date.setTime(date.getTime() + dayToLive * 24 * 60 * 60 *1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArr = cookieDecoded.split("; ");
    let result = null;

    cookieArr.forEach(element =>{
        if(element.indexOf(name) === 0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}

menu.addEventListener('click',function(){
    nav.style.animation = "1s animasi_masuk ease-in-out forwards";
    setNav();
});

exit_button.addEventListener('click',function(){
    nav.style.animation = "1s animasi_keluar ease-in-out forwards";
    setTimeout(()=>{
        setNav();
    },800);
    
});
const randomNumber = (number) => {
    return Math.floor(Math.random() * number);
}

function random_background(){
    let rgb = [randomNumber(256), randomNumber(256), randomNumber(256) ];
    let rgb2 = [randomNumber(256), randomNumber(256), randomNumber(256) ];
    let rgb3 = [randomNumber(256), randomNumber(256), randomNumber(256) ];
    let rgb4 = [randomNumber(256), randomNumber(256), randomNumber(256) ];
    let rgb5 = [randomNumber(256), randomNumber(256), randomNumber(256) ];
    let rgb6 = [randomNumber(256), randomNumber(256), randomNumber(256) ];
    header.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    deco.style.backgroundColor = `rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    deco1.style.backgroundColor = `rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    deco2.style.backgroundColor = `rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    deco3.style.backgroundColor = `rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    deco4.style.backgroundColor = `rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    h1_title.style.color = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
    h1_title.style.boxShadow = `5px 5px 10px 10px rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    dj_1.style.color = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
    dj_2.style.color = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
    dj_3.style.color = `rgb(${rgb5[0]}, ${rgb5[1]}, ${rgb5[2]})`;
    exit_button.style.color = `rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    exit_button.style.boxShadow = `5px 5px 10px 10px rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    nav.style.border = `5px solid rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    dj_1.style.boxShadow = `5px 5px 10px 10px rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    dj_2.style.boxShadow = `5px 5px 10px 10px rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
    dj_3.style.boxShadow = `5px 5px 10px 10px rgb(${rgb6[0]}, ${rgb6[1]}, ${rgb6[2]})`;
};
setInterval(random_background,600);
    
exit_button.addEventListener('click', function(){
    this.style.animation = 'scale_in 0.5s ease-in-out forwards';
    setTimeout(()=>{
    this.style.animation = 'scale_out 0.5s ease-in-out forwards';
    },1000)
});
dj_1.addEventListener('click', function(){
    this.style.animation = 'scale_in 0.5s ease-in-out forwards';
    setTimeout(()=>{
    this.style.animation = 'scale_out 0.5s ease-in-out forwards';
    },1000)
});
dj_2.addEventListener('click', function(){
    this.style.animation = 'scale_in 0.5s ease-in-out forwards';
    setTimeout(()=>{
    this.style.animation = 'scale_out 0.5s ease-in-out forwards';
    },1000)
});
dj_3.addEventListener('click', function(){
    this.style.animation = 'scale_in 0.5s ease-in-out forwards';
    setTimeout(()=>{
    this.style.animation = 'scale_out 0.5s ease-in-out forwards';
    },1000)
});

setInterval(()=>{
    h1_title.style.animation = "scale 2s ease-in-out forwards";
    setTimeout(()=>{
    h1_title.style.animation = "";
    },2001)
    dj_1.style.animation = "scale_low 2s ease-in-out forwards";
    setTimeout(()=>{
    dj_1.style.animation = "";
    },2001)
    dj_2.style.animation = "scale_low 2s ease-in-out forwards";
    setTimeout(()=>{
    dj_2.style.animation = "";
    },2001)
    dj_3.style.animation = "scale_low 2s ease-in-out forwards";
    setTimeout(()=>{
    dj_3.style.animation = "";
    },2001)
    exit_button.style.animation = "scale_low 2s ease-in-out forwards";
    setTimeout(()=>{
    exit_button.style.animation = "";
    },2001)
},2050);


// dark mode

let dark;
if (!getCookie('dark')){
    setCookie('dark', false, 1);}
dark = JSON.parse(getCookie('dark'));

const body = document.body;
const button_dark = document.querySelector(".dark_button")
if (dark){
    body.classList.add('dark');
    button_dark.classList.add('dark');
}
button_dark.addEventListener('click', function(){
    this.classList.toggle('dark');
    body.classList.toggle('dark');
    dark = !dark;
    setCookie('dark', dark, 1);
})

// count
document.addEventListener("DOMContentLoaded", function () {
    const H1el = document.querySelector(".count-h1");
const Buttonel = document.querySelector(".count-button");
let counter = 3;

let answer;
if (!localStorage.getItem('answer'))
    localStorage.setItem('answer', false);
const interval = setInterval(()=>{
        counter--;
        H1el.innerHTML = `Wait ${counter} Seconds...`;
    },1000);

answer = JSON.parse(localStorage.getItem('answer'));


const alarm = setTimeout(()=>{
    clearInterval(interval);
    H1el.style.display = "none";
    Buttonel.style.display = "none";
    answer = true;
    document.querySelector("#hide").classList.add('show');
    document.querySelector("#hide").classList.remove('hide');
    localStorage.setItem('answer', answer);
},3000);
if(answer){
    document.querySelector("#hide").classList.add('show');
    document.querySelector("#hide").classList.remove('hide');
    clearInterval(interval);
    H1el.style.display = "none";
    Buttonel.style.display = "none";
}

Buttonel.addEventListener('click', ()=>{
    clearInterval(interval);
    clearTimeout(alarm);
    document.querySelector('.count-h1').innerHTML = "Yaaaaa.... 😭";
    Buttonel.style.display = "none";
    answer = false;
    localStorage.setItem('answer', answer);
    
});
})
