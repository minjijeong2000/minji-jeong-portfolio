const skills = document.getElementById("nameSkills")

console.log(skills)
skills.addEventListener("mouseenter", function(evt){
    evt.target.style.color = "black"
    setTimeout(function() {
        evt.target.style.color = ""
    }, 300)
}, false)

const edu = document.getElementById("nameEducation")

edu.addEventListener("mouseenter", function(evt){
    evt.target.style.color = "black"
    setTimeout(function() {
        evt.target.style.color = ""
    }, 300)
}, false)

const work = document.getElementById("nameWork")

work.addEventListener("mouseenter", function(evt){
    evt.target.style.color = "black"
    setTimeout(function() {
        evt.target.style.color = ""
    }, 300)
}, false)

const contactName = document.getElementById("nameContact")

contactName.addEventListener("mouseenter", function(evt){
    evt.target.style.color = "black"
    setTimeout(function() {
        evt.target.style.color = ""
    }, 300)
}, false)

const pic = document.getElementById("picture")

// function imageIs () {
//     document.getElementById("picture").src = "./images/Saly-19.png"
// }

// function prevImg () {
//     document.getElementById("picture").src = "./images/Saly-10.png"
// }

// let button = document.getElementById('button')
// let bye = document.getElementById('bye')

// function msg() {
//     let msg ='Bye! See you again!'
//     alert(msg)
// }

const music = new Audio("./audio/ghibli.mp3")

const musicPlay = document.querySelector('#pic')

musicPlay.addEventListener('click', function(evt) {
    music.volume = .20
    music.play()
})



