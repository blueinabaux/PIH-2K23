let navLinks  = document.querySelector(".nav-resp");
let btn = document.querySelector(".nav-toggle");

let flag = 0;


btn.addEventListener("click",function(){

    if(flag == 0){
        
        navLinks.style.right = 0;
        flag = 1;
    }
    else{
        navLinks.style.right = "100%";
        flag = 0;
    }
    
})


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

let t1 = gsap.timeline()
t1
    .from("#nav .nav-left img",{
        y:-100,
        duration:1.5,
        delay:0.5,
        opacity:0,
        
    })
    .from("#nav .nav-left a",{
        y:-100,
        duration:0.5,
        delay:0.5,
        opacity:0,
        stagger:0.2
        
    })
    .from("#nav .nav-right a",{
        y:-100,
        // duration:1,
        delay:0,
        opacity:0,
        stagger:0.2

        
    })



let a = gsap.timeline();
a
    .from("#main #page1 h1",{
        y:50,
        duration:1,
        opacity:0,
    })
    // .to("#main #page1 h1",{
    //     y:0,
    //     opacity:1
    // })
    .from("#main #page1 h2",{
        y:50,
        duration:2,
        opacity:0,
    })

    .from("#main #page1 p",{
        y:50,
        duration:2,
        opacity:0,
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