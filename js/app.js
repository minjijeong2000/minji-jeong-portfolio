const skills = document.getElementById("nameSkills")

skills.addEventListener("mouseenter", function(evt){
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