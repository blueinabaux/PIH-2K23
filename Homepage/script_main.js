function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",    
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: "#main" });
    // --- SETUP END ---

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}




gsap.to("#nav",{
    backdropFilter: "blur(10px)",
    color:"#fff",
    height:"100px",
    duration:0.5,

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    // smooth:true,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
        

    }
    
})


let a = gsap.timeline();
a
 .from("#main #page1 h1",{
        y:50,
        duration:3,
        opacity:0,
    })
    .to("#main #page1 h1",{
        y:0,
        opacity:1
    })

gsap.from("#page2 .card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        scrub:1,
        start:"top 70%",
        end:"top 65%",
        // markers:true
    }
})
gsap.from("#page3 .card-1",{
    scale:0.8,
    opacity:0,
    duration:2,
    
    scrollTrigger:{
        trigger:".card-1",
        scroller:"body",
        scrub:2,
        start:"top 70%",
        end:"top 65%",
        // markers:true
    }
})



gsap.from("#page2 .services",{
    y:50,
    opacity:0,
    duration:2,
    
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        scrub:3,
        start:"top 70%",
        end:"top 65%",
        // markers:true
    }
})

gsap.from("#page3 .services-1",{
    y:50,
    opacity:0,
    duration:2,
    
    scrollTrigger:{
        trigger:".services-1",
        scroller:"body",
        scrub:3,
        start:"top 70%",
        end:"top 65%",
        // markers:true
    }
})


