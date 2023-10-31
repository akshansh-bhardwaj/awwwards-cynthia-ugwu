function cursorStretch(){
    clearTimeout(timeout);
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function(detls) {
        xscale = gsap.utils.clamp(0.5, 1.2, detls.clientX - xprev);
        yscale = gsap.utils.clamp(0.5, 1.2, detls.clientY - yprev);

        xprev = detls.clientX;
        yprev = detls.clientY;
        
        cursorFollower(xscale,yscale);

        timeout = setTimeout(function(){
            document.querySelector("#cursor").style.transform = `translate(${detls.clientX}px , ${detls.clientY}px) scale(1,1)`
        })
    });
}
