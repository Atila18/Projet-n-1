//Faire apparaitre/disparaitre le modal

const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-modal");
// const closeTask = document.querySelector(".close-tache");

// Fonction pour afficher la modal
function showModal() {
  modalContainer.style.display = "block";
}

// Fonction pour masquer la modal
function hideModal() {
  modalContainer.style.display = "none";
}

//
// Faire apparaitre les valeurs du Form dans le HTML
const form = document.querySelector("#form");
const taskContainer = document.querySelector("#task-container");

function addTask(event) {
  event.preventDefault();

  // Récupère les valeurs des champs du formulaire
  const todoInputValue = document.querySelector("#todoInput").value;
  const dateValue = document.querySelector("#date").value;
  const descriptionValue = document.querySelector("#description").value;

  if ((todoInputValue && dateValue) || descriptionValue) {
    //Nouvelle div pour la tâche
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-container");

    // Ajoute les valeurs des champs du formulaire à la nouvelle div

    const newTodo = document.createElement("h2");
    newTodo.innerHTML = todoInputValue;
    newTodo.classList.add("newTodo");
    taskDiv.appendChild(newTodo);

    const newDate = document.createElement("p");
    newDate.innerHTML = dateValue;
    newDate.classList.add("newDate");
    taskDiv.appendChild(newDate);

    const newDescription = document.createElement("p");
    newDescription.innerHTML = descriptionValue;
    newDescription.classList.add("newDescription");
    taskDiv.appendChild(newDescription);

    // // Ajoute la nouvelle div à la div taskContainer
    taskContainer.appendChild(taskDiv);
  }
}

//
//
//écouteur d'événement sur le bouton "Ajouter" pour afficher la modal
modalBtn.addEventListener("click", function () {
  showModal();
  // Réinitialiser les champs du formulaire
  document.querySelector("#form").reset();
});

//écouteur d'événement sur le bouton "OK" pour masquer la modal
closeBtn.addEventListener("click", function (event) {
  addTask(event);
  hideModal();
});

//écouteurs d'événement sur l'overlay et le formulaire pour masquer la modal
modalTrigger.forEach(function (trigger) {
  trigger.addEventListener("click", hideModal);
});

//écouteur d'événement sur le bouton "Ajouter" pour afficher la modal
modalBtn.addEventListener("click", function () {
  showModal();
  // Réinitialiser les champs du formulaire
  document.querySelector("#form").reset();
});

//écouteur d'événement sur le bouton "Ajouter" pour réafficher la modal
document.querySelector(".modal-btn").addEventListener("click", function () {
  showModal();
});

//
//écouteur d'événement sur le bouton "-" pour supprimer les liste
const finishTask = document.querySelector("e");
const deleteFinish = document.querySelector(".gg-close");

deleteFinish.addEventListener("click", function () {
  finishTask.remove();
  deleteFinish.remove();
});
