const skills = document.getElementById("nameSkills")

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

function imageIs () {
    document.getElementById("pic").src = "./images/Saly-22.png"
}

function prevImg () {
    document.getElementById("pic").src = "./images/White-in-Basic8.png"
}

const music = new Audio("./audio/ghibli.mp3")

const musicPlay = document.querySelector('.icon')

musicPlay.addEventListener('click', function(evt) {
    music.volume = .20
    music.play()
})

let project = {
    title:'tic-tac-toe',
    deployment: 'https://ttt-weekend-minji.netlify.app',
    image: './images/tic-tac-toe.png',
    github: 'https://github.com/minjijeong2000/ttt-weekend',
    description: 'Want to play tic-tac-toe? Click the link below!'
}

let projectMarkup = projectData.map(project => 
    `
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    ` 
).join('')

