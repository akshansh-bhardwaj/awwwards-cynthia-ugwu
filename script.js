const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout = 0;

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#navbar", {
        y : '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    
    .to('.boundelem',{
        y : 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        stagger: 0.2
    })

    .from("#foot-line", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    } )

}



function cursorFollower(){
    main.addEventListener("mouseleave", function(detls){
        gsap.to("#cursor", {
            opacity: 0,
            ease: Power3
        })
    })

    window.addEventListener("mousemove", function(detls){
        gsap.to("#cursor", {
            opacity: 1,
            ease: Power3
        })
    })

    window.addEventListener("mousemove", function(detls){
        document.querySelector("#cursor").style.transform = `translate(${detls.clientX}px , ${detls.clientY}px)`
    })}


cursorFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var tempRotate = 0;

    elem.addEventListener('mouseleave', function(detls) {
        
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            duration: 0.5,
            ease : Power3
        });
    });   

    elem.addEventListener('mousemove', function(detls) {
        var ydiff = detls.clientY - elem.getBoundingClientRect().top;
        rotate = detls.clientX - tempRotate;
        tempRotate = detls.clientX;
        console.log(elem.getBoundingClientRect());
        
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            left: detls.clientX,
            top: ydiff,
            ease: Power3,
            rotate: gsap.utils.clamp(-15,15, rotate),
        });

    }); 

    
});