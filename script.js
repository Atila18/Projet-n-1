// Croix qui supprime une tâche
const myTask = document.querySelector(".sous-tache");
const deleteBtn = document.querySelector(".gg-close");

deleteBtn.addEventListener("click", function () {
  taskDiv.remove();
});
