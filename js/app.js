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

// const pic = document.getElementById("pic")

// function imageIs () {
//     document.getElementById("pic").src = "./images/Saly-22.png"
// }

// function prevImg () {
//     document.getElementById("pic").src = "./images/White-in-Basic8.png"
// }

const music = new Audio("./audio/ghibli.mp3")

const musicPlay = document.querySelector('#pic')

musicPlay.addEventListener('click', function(evt) {
    music.volume = .20
    music.play()
})

import { projectData } from "./work.js"

const cardContainer = document.getElementById('card-container')


let projectMarkup = projectData.map(project => 
    `
    <div class="card" style="width: 18rem;">
      <img src="${project.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div>
        <a href="${project.gihub}" class="btn btn-primary">GitHub</a>
        <a href="${project.deployment}" class="btn btn-primary">Deployment</a>
      </div>
    </div>
    </div>
    ` 
).join('')

cardContainer.innerHTML = projectMarkup

