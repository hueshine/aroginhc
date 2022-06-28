



gsap.from(".service-item ", { 
    scrollTrigger: { 
        trigger: ".mns", 
        start: 'top center+=32%', 
        end: 'bottom bottom', 
    } ,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    y: 20,
})

gsap.from(".we-are-best .content", { 
    scrollTrigger: { 
        trigger: ".we-are-best", 
        start: 'top center+=32%', 
        end: 'bottom bottom', 
        
    } ,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    y: 20,
})

gsap.from(".heading", { 
    scrollTrigger: { 
        trigger: ".services", 
        start: 'top center', 
        end: 'bottom bottom', 
        
    } ,
    opacity: 0,
    duration: 1,
    x: -20,
})

gsap.from(".general-section", { 
    scrollTrigger: { 
        trigger: ".services", 
        start: 'top center', 
        end: 'bottom bottom', 
        
    } ,
    opacity: 0,
    duration: 2,
    y: 20,
})

gsap.from(".footer-section", { 
    scrollTrigger: { 
        trigger: "footer", 
        start: 'top center+=24%', 
        end: 'bottom bottom', 
        // markers: true,
    } ,
    opacity: 0,
    duration: 1,
    y: 20,
})
