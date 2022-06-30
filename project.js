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
        <a href="${project.github}" class="btn btn-primary">GitHub</a>
        <a href="${project.deployment}" class="btn btn-primary">Deployment</a>
      </div>
    </div>
    </div>
    ` 
).join('')

cardContainer.innerHTML = projectMarkup