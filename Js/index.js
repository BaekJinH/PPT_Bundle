var s = skrollr.init();
// AOS.init();

//새로고침 스크롤
// history.scrollRestoration = "manual"  

//메인 화면 고정
let main = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        pin: true,
        scrub: 0.3,
        start: "top top",
        end: "+=1300"
    }
});


// 텍스트 깜빡임 효과
const content = "방문해주셔서 감사합니다."

const text = document.querySelector('.typingText');
let index = 0 ;

function sleep (delay) {
    const start = new Data(). getTime();
    while (new Data ().getTime() < start + delay);
}

function typing() {
    text.textContent += content[index++];
    if(index > content.length) {
        text.textContent = '';
        index = 0;
        sleep (3000)
    }
}

setInterval (typing , 400)


// 텍스트 깜빡임 2
let target = document.querySelector('.typingText');

function randomString () {
    let stringArr = []
}

$(window).scroll(function () {
    var scrollValue = $(this).scrollTop();

    if (scrollValue > $('#section08').offset().top) {
        // $('.fa-snowflake').css({display:'none'})
    }
})

// hambuger menu
$('.btnWrap').click(function(){
    $('.hambuger').toggleClass('active');
    $('nav').toggleClass('active');
    $(this).stop().css({zIndex:15})
})


const hambug = document.getElementsByClassName('hambuger')[0]

function hambugerColor () {

}



// skill 스크립트

let number =  document.getElementById('number1');
let counter = 0;
setInterval(() => {
    if(counter == 75) {
        clearInterval () ;
    }
    else {
        counter += 1;
        number.innerHTML = counter + '%';    
    }
}, 30) ;


let number2 =  document.getElementById('number2');
let counter2 = 0;
setInterval(() => {
    if(counter2 == 70) {
        clearInterval () ;
    }
    else {
        counter2 += 1;
        number2.innerHTML = counter2 + '%';    
    }
}, 30) ;


let number3 =  document.getElementById('number3');
let counter3 = 0;
setInterval(() => {
    if(counter3 == 95) {
        clearInterval () ;
    }
    else {
        counter3 += 1;
        number3.innerHTML = counter3 + '%';    
    }
}, 30) ;


let number4 =  document.getElementById('number4');
let counter4 = 0;
setInterval(() => {
    if(counter4 == 60) {
        clearInterval () ;
    }
    else {
        counter4 += 1;
        number4.innerHTML = counter4 + '%';    
    }
}, 30) ;


let number5 =  document.getElementById('number5');
let counter5 = 0;
setInterval(() => {
    if(counter5 == 70) {
        clearInterval () ;
    }
    else {
        counter5 += 1;
        number5.innerHTML = counter5 + '%';    
    }
}, 30) ;


let number6 =  document.getElementById('number6');
let counter6 = 0;
setInterval(() => {
    if(counter6 == 55) {
        clearInterval () ;
    }
    else {
        counter6 += 1;
        number6.innerHTML = counter6 + '%';    
    }
}, 30) ;


let number7 =  document.getElementById('number7');
let counter7 = 0;
setInterval(() => {
    if(counter7 == 60) {
        clearInterval () ;
    }
    else {
        counter7 += 1;
        number7.innerHTML = counter7 + '%';    
    }
}, 30) ;






// //스크롤 탑 값
// window.addEventListener("scroll", function () {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY; //스크롤 크로스 브라우징
//     // let value = window.scrollY;
//     // let hippocampus = document.querySelector('.hippocampus');

//     document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);


//     // hippocampus.style.left = value * 8 + 'px';

// });


//아메바 정의
const blob = createBlob({
    element: document.querySelector('.blob'),
    numPoints: 10, //아메바 점 개수
    centerX: 490, //중심점
    centerY: 490,
    minRadius: 360, //테두리 굴곡
    maxRadius: 420,
    minDuration: 1, //지속 시간
    maxDuration: 2
});

function createBlob(options) {

    var points = [];
    var path = options.element;
    var slice = (Math.PI * 2) / options.numPoints; //파이 * 2 / 점 개수
    var startAngle = random(Math.PI * 2);

    var tl = new TimelineMax({
        onUpdate: update
    });

    for (var i = 0; i < options.numPoints; i++) {

        var angle = startAngle + i * slice;
        var duration = random(options.minDuration, options.maxDuration);
        var point = {
            x: options.centerX + Math.cos(angle) * options.minRadius,
            y: options.centerY + Math.sin(angle) * options.minRadius
        };
        var tween = TweenMax.to(point, duration, {
            x: options.centerX + Math.cos(angle) * options.maxRadius,
            y: options.centerY + Math.sin(angle) * options.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
        });

        tl.add(tween, -random(duration));
        points.push(point);
    }

    options.tl = tl;
    options.points = points;

    function update() {
        path.setAttribute("d", cardinal(points, true, 1));
    }

    return options;
}

function cardinal(data, closed, tension) {

    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 1;

    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";

    for (var i = 0; i < size; i++) {

        var p0, p1, p2, p3;

        if (closed) {
            p0 = data[(i - 1 + size) % size];
            p1 = data[i];
            p2 = data[(i + 1) % size];
            p3 = data[(i + 2) % size];

        } else {
            p0 = i == 0 ? data[0] : data[i - 1];
            p1 = data[i];
            p2 = data[i + 1];
            p3 = i == size - 1 ? p2 : data[i + 2];
        }

        var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
        var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

        var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
        var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

        path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }

    return closed ? path + "z" : path;
}

function random(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return min + (max - min) * Math.random();
}
//아메바




const modal = document.querySelector("#modal");
const modalWrap = document.querySelector(".modalWrap");
const btnModal = document.querySelectorAll(".project");
const projectWrap = document.querySelector(".projectWrap");
const client = document.querySelector(".client");
const description = document.querySelector(".description");
const role = document.querySelector(".role");
const date = document.querySelector(".date");

//모달에 출력되어야할 값들의 배열
const modalInfo = [{
    url: "https://baekjinh.github.io/project_1/",
    bg:"background-image: url('./assets/img/1.png')",
    client: "STUDY",
    description: "WEB PROP SHOP SITE",
    role: "HTML, CSS, JAVASCRIPT, JQUERY",
    date: "2022.04"
},
{
    url: "https://seol1059.github.io/No.2/",
    bg:"background-image: url('./assets/img/2.png')",
    client: "STUDY",
    description: "WEB CITY POP SITE",
    role: "HTML, CSS, JAVASCRIPT, JQUERY",
    date: "2022.05"
},
{
    url: "https://seol1059.github.io/No.3/",
    bg:"background-image: url('./assets/img/3.png')",
    client: "STUDY",
    description: "GRAPHIC ARTWORK SITE",
    role: "HTML, CSS, JAVASCRIPT, JQUERY",
    date: "2022.06"
},
{
    url: "https://tuesdayy96.github.io/team_project/",
    bg:"background-image: url('./assets/img/6.png')",
    client: "STUDY",
    description: "KOREAN AIR SITE",
    role: "HTML, CSS, JAVASCRIPT, JQUERY",
    date: "2022.05"
},
{
    url: "https://seol1059.github.io/No.4/",
    bg:"background-image: url('./assets/img/4.png')",
    client: "STUDY",
    description: "LA CASA DE PAPEL SITE",
    role: "HTML, CSS, JAVASCRIPT, JQUERY",
    date: "2022.07"
},
{
    url: "https://seol1059.github.io/No.5/",
    bg:"background-image: url('./assets/img/5.png')",
    client: "STUDY",
    description: "BINGGRAE SITE",
    role: "HTML, CSS, JAVASCRIPT, JQUERY",
    date: "2022.07"
},
{
    url: "https://seol1059.github.io/Millie/",
    bg:"background-image: url('./assets/img/7.png')",
    client: "STUDY",
    description: "Millie SITE",
    role: "HTML, CSS, JAVASCRIPT, JQUERY , AJAX",
    date: "2022.07"
},
// {
//     url: "https://seol1059.github.io/Portfolio/",
//     client: "STUDY",
//     description: "PORTFOLIO_HTML SITE",
//     role: "HTML, CSS, JAVASCRIPT, JQUERY",
//     date: "2022.08"
// },
{
    url: "https:",
    client: "STUDY",
    description: "PORTFOLIO_DESIGN SITE",
    role: "PHOTOSHOP , ILLUSTRATION , PREMIEREPRO",
    date: "-"
}
]

//프로젝트를 클릭하기 위한 project 반복 
btnModal.forEach((btn, index) => {
    //내가 선택한 프로젝트의 클릭 이벤트 발생
    //모달창 띄우기
    //모달안에 값을 출력시키기 위해서 updateModal함수에 index담아서 실행시킴  
    btn.addEventListener("click", e => {
        modal.style.cssText = "display:block";
        projectWrap.style.display = "none";

        updateModal(index);
    });
});


modal.addEventListener("click", e => {
    const closeBtn = e.target;
    if (closeBtn.classList.contains("close_btn")) {
        modal.style.display = "none";
        projectWrap.style.display = "flex";
    };
});



function updateModal(index) {
    const input = [];
    input.push(`
            <div class="modalWrap fixed">
                <div class="modalBg">
                    <div class="close_btn">
                        <div class="blackbar eq0"></div>    
                        <div class="blackbar eq1"></div>    
                    </div>

                    <div class="modal goodnight">
                        <div class="frame" style="${modalInfo[index].bg}"><a href="${modalInfo[index].url}"></a></div>
                        <div class="explain">
                            <ul>
                                <li>
                                    <div class="title">CLIENT</div>
                                    <div class="desc client">${modalInfo[index].client}</div>
                                </li>
                                <li>
                                    <div class="title">DESCRIPTION</div>
                                    <div class="desc description">${modalInfo[index].description}</div>
                                </li>
                                <li>
                                    <div class="title">ROLE</div>
                                    <div class="desc role">${modalInfo[index].role}</div>
                                </li>
                                <li>
                                    <div class="title">DATE</div>
                                    <div class="desc date">${modalInfo[index].date}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `)
    modal.innerHTML = input.join(' ');
};


//출력용
// window.addEventListener("mousemove", function (event) {
//     document.querySelector(".clientX").innerText = event.clientX;
//     document.querySelector(".clientY").innerText = event.clientY;
//     document.querySelector(".offsetX").innerText = event.offsetX;
//     document.querySelector(".offsetY").innerText = event.offsetY;
//     document.querySelector(".pageX").innerText = event.pageX;
//     document.querySelector(".pageY").innerText = event.pageY;
//     document.querySelector(".screenX").innerText = event.screenX;
//     document.querySelector(".screenY").innerText = event.screenY;
// });

window.addEventListener("mousemove", function (e) {
    var closeBtn = document.querySelector(".close_btn");
    if (closeBtn) {
        closeBtn.style.left = e.clientX + "px";
        closeBtn.style.top = e.clientY + "px";
    }

});


$(document).ready(function () {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".mountainBack").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.mountainBack').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });
});

const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menuList");
const list = document.querySelectorAll(".menuList li");
const nav = document.querySelectorAll(".nav");
const activeCont = [0, 5700, 10900, 31550, 34000];
let flag = true;
console.log(list)
var bgm = new Audio("./assets/bgm/wish.mp3");
    bgm.volume = 0.3;
    bgm.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    
document.querySelector(".bgm").addEventListener("click", function(){
    if(flag){
        const promise = bgm.play();
        promise.then(()=>{
            console.log("음악 실행");
        })
        .catch((error)=>{
            console.error("음악 재생실패 : ", error);
        });
        
        flag = false;
    } else {
        bgm.pause();
        flag = true;
    }
    
});

menu.addEventListener("click", function(){
    menuList.classList.toggle("show");
});

for(let i = 0; i < list.length; i++){
    list[i].querySelector('.nav').addEventListener('click', function(e){
        e.preventDefault();

        for(let j = 0; j < list.length; j++){
        // 나머지 버튼 클래스 제거
        list[j].classList.remove('active');
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('active');

        // 버튼 클릭시 컨텐츠 전환
        window.scrollTo(0, activeCont[i]);
        // document.querySelector(activeCont).style.display = 'block';
    });
}

console.log(activeCont);










var HEIGHT,WIDTH;
    var lake = document.getElementById("lake");
    window.addEventListener('resize', handleResize, false);
    handleResize();
    
    function handleResize(){
      HEIGHT = window.innerHeight,
      WIDTH = window.innerWidth;
    }
    
    onmousedown = function(event){
      createRipples(event.pageX, event.pageY);
    }
    
    function createRipples(x,y){
      var tx = x || Math.random()*WIDTH;
      var ty = y || (Math.random()+.5)*HEIGHT*.5;
      var spltch = document.getElementById("sploutch");
      var cln = spltch.cloneNode(true);
      cln.style.left=(tx-150) +"px";
      cln.style.top=(ty-150) +"px";
      lake.appendChild(cln);
      // remove it from the dom after a while
      setTimeout(function(){
        lake.removeChild(cln);
      }, 4000);
    }
    
    setInterval(createRipples, 200);
    
    var img = document.querySelector("#displacementFilter feTurbulence");
    var frames = 0;
    var rad = Math.PI / 180;
    
    function AnimateBaseFrequency() {
      //baseFrequency="0.01 .1"
      bfx = 0.01;
      bfy = .1;
      frames += .25
      bfx += 0.001 * Math.cos(frames * rad);
      bfy += 0.005 * Math.sin(frames * rad);
    
      bf = bfx.toString() + ' ' + bfy.toString();
      img.setAttributeNS(null, 'baseFrequency', bf);
    
      window.requestAnimationFrame(AnimateBaseFrequency);
    }
    
    window.requestAnimationFrame(AnimateBaseFrequency);

