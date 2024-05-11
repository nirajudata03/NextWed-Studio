function navAnimation(){
    var tl = gsap.timeline()

tl.from(".nav h1", {
    y: -20,
    x: -10,
    opacity: 0,
    duration: 0.5,
})
tl.from(".nav ul", {
    y: -20,
    x: -2,
    opacity: 0,
    duration: 0.5,
})



var hl = gsap.timeline()

hl.from("#page1 h1", {
    y: -20,
    x: -2,
    opacity: 0,
    duration: 0.5,
    delay: 1
})
hl.from("#page1 h1 svg", {
    rotate: 360,
    duration: 0.5,
})



var pass = gsap.timeline()

pass.from("#page1 p", {
    y: -20,
    x: -10,
    opacity: 0,
    duration: 0.5,
    delay: 1
})
pass.from("#page1 #page1-keys", {
    y: -20,
    x: -10,
    opacity: 0,
    duration: 0.5
})



gsap.from("#page1 #moving-div", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    delay: 1.5
})
}
navAnimation()


function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })
        })
    })
}
page2Animation()


function page3Animation(){

var page3Center = document.querySelector("#page3-center")
var video = document.querySelector("#page3 video")
var page = document.querySelector("#page3")

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        display:"block",
        opacity:1,
        borderRadius:0,
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        display:"none",
        opacity:0,
        borderRadius:30,
    })
})
page.addEventListener("mouseleave",function(){
    video.pause()
    gsap.to(video,{
        display:"none",
        opacity:0,
        borderRadius:30,
    })
})
}
page3Animation()


function page3Animation2(){

    var sections = document.querySelectorAll(".sec-right")

sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})
}
page3Animation2()