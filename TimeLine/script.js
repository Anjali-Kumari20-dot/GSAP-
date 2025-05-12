// gsap.to("#box1", {
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
// })
// gsap.to("#box2", {
//     x:1200,
//     backgroundColor: "yellow",
//     duration:2,
//     delay:3,
// })
// gsap.to("#box3", {
//     x:1200,
//     scale:0.5,
//     borderRadius: "50%",
//     duration:2,
//     delay:5,
// })

// # ROLE OF TIMELINE

// var tl = gsap.timeline()

// tl.to("#box1", {
//     x:1200,
//     duration:1.5,
//     rotate:360,
//     delay:1,
// })
// tl.to("#box2", {
//     x:1200,
//     duration:1.5,
// })
// tl.to("#box3", {
//     x:1200,
//     duration:1.5,
// })

var tl = gsap.timeline()

tl.from("h2", {
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4", {
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from("h1", {
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})