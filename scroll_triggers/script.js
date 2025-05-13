// gsap.from("#page1 .box", {
//      scale:0,
//      delay:1,
//      duration:2,
//      rotate:360,
// })
// gsap.from("#page3 .box", {
//      scale:0,
//      duration:1,
//      opacity: 0,
//      rotate: 720,
//      scrollTrigger: {
//         trigger: "#page3 .box",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 2,
//         // pin: true,
//      }
// })
// gsap.from("#page2 h1", {
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger: "#page2 h1",
//         markers:true,
//         scroller: "body",
//         start: "top 50%"
//     }
// })
// gsap.from("#page2 h2", {
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger: "#page2 h2",
//         markers:true,
//         scroller: "body",
//         start: "top 50%"
//     }
// })

gsap.to("#page2 h1", {
    x:"-170%" ,
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true, 
    }
})  

gsap.from("#page1 h2", {
    x: 1200,
    duration:2,
    delay:1,
    opacity:0,
})

gsap.from("#page1 h3", {
    x: -1200,
    duration:2,
    delay:3,
    opacity:0,
})

gsap.from("#page1 h1",{
    y:100,
    duration:1,
    delay:5,
    opacity:0,
})

gsap.from("#page3 h1 span", {
    opacity:0,
    y: 50,
    duration:1,
    stagger:0.2,
    delay:1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
    }
})