// Croix qui supprime une tâche
const myTask = document.querySelector(".sous-tache");
const deleteBtn = document.querySelector(".gg-close");

deleteBtn.addEventListener("click", function () {
  myTask.remove();
  deleteBtn.remove();
});

// // Ajouter un bouton "close" à la tâche
// const closeBtn = document.createElement("div");
// closeBtn.classList.add("gg-close");

// taskdiv.appendChild(closeBtn);
