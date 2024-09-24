var tl = gsap.timeline() ;

tl.from("nav h1, nav h4, nav button", {
    opacity: 0,
    y:-30,
    delay: 0.5,
    duration: 1,
    stagger: 0.2
})

tl.from(".center-part1 h1", {
    x: -300,
    duration: 0.8,
    opacity: 0
})

tl.from(".center-part1 p", {
    x: -100,
    duration: 0.8,
    opacity: 0
})

tl.from(".center-part1 button", {
    opacity: 0,
    duration: 1.5
}, "-=0.5")

tl.from(".center-part2 img", {
    opacity: 0,
    duration: 1,
    x: 300
}, "-=3")

tl.from(".section1-bottom img", {
    opacity: 0,
    stagger: 0.2,
    y: -30
}, "-=1")