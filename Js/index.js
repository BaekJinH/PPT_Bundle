

let main = gsap.timeline({
    scrollTrigger: {
        trigger: "#onepage",
        pin: true,
        scrub: 0.3,
        start: "top top",
        end: "+=1300"
    }
});


$('.s2').on({mousewheel : function(){
    if(wheelDelta > 0) {
        var wheelDelta = e.originalEvent.wheelDelta;
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft())
    }
    else {
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft())
    }
}})



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




new Vue({
    el : '#onepage' ,
    data : {
        myArray : [
            {transform : 'translateX(10vw) ' } ,
            {transform : 'translateX(10vw) ' } ,
            {transform : 'translateX(10vw) ' } ,
            {transform : 'translateX(10vw) ' } ,
            {transform : 'translateX(10vw) ' }
        ]
    }
})





// $(function(){


//     var total_section = 0; //전체 원페이지 수
//     var current_idx = 0;
//     var screen_h = 0; // 화면 높이
//     var page_h = 0;
//     var last_y = 0; // 스크롤 마지막 하단 높이
//     var onpage_on = true;
//     var isScroll = false;


//         init();
        
            
//         // Scroll Event
//         $('#onepage').on('scroll touchmove mousewheel', function(event) {	
            
//             //console.log(current_idx);

//             if(last_y > $("html").scrollTop() && !onpage_on){
                
//                 //원페이지 스크롤 진입
//                 console.log(":: 원페이지 시작 ::");
//                 onpage_on = true;
//                 isScroll = false;
//             }
            
//             if(!onpage_on) return;
            
//             //스크롤 이벤트 막기
//             event.preventDefault();
//             event.stopPropagation();		
//             if(isScroll) return; // 현재 스크롤이 동작중이면 종료
            
            
//             isScroll = true;		
//             var direction = event.originalEvent.wheelDelta; //마우스 휠 방향
//             var y = 0;

//             if(direction > 0){
//                 // up
//                 current_idx --;
//                 if(current_idx < 0){current_idx = -1;}
//                 y = current_idx * page_h;
//             }
//             else{
//                 // down
//                 current_idx ++;
//                 if(current_idx > total_section){
//                     current_idx = total_section;
//                     onpage_on = false;
//                     return;
//                 }
                
//                 y = current_idx * page_h;		
//             }

//             $('html').animate({scrollTop: y}, 800, function(){isScroll=false;});	
//         });

//     $( window ).resize(function() {
        
//         // 반응형
//         setHeight();
//     });


//     function init(){
        
//         setHeight();
        
//         total_section = $('#onepage > section').length;
//         last_y = page_h * total_section;
//     }	

//     function setHeight(){
        
//         // 높이 설정
//         screen_h = screen.height - 143;
//         // screen_h = document.body.clientHeight;
//         page_h = screen_h - 0;
//         $("#onepage > section").height(page_h);
//     }
// })






    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');

    let totalSnow = 500;
    let listSnow = [];

    const Snow = function () {
        this.x = Math.random()*c.width;
        this.y = Math.random()*c.height;
        this.radius = Math.random()*3 + 1;
        this.speedX = random(-2, 2);
        this.speedY = random(2, 5);

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();

            // update
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.y > c.height) {
                this.y = -10;
                this.x = Math.random() * c.width * 10.5;
                // this.x = Math.random() * c.width * 1.5;
            }
        }
    }

    const random = (min, max) => {
        return min + Math.random() * (max - min + -2);
    }

    const init = () => {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        document.body.appendChild(c);
        createSnow();
    }

    const createSnow = () => {
        for(let i = 0; i < totalSnow; i++ ) {
            listSnow.push(new Snow);
        }
    }

    const loop = () => {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, c.width, c.height);
        
        listSnow.forEach((snow) => {
            snow.draw();
        });

        requestAnimationFrame(loop);
    }

    // main logic
    (() => {
        init();
        loop();
    })();
