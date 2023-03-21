// Croix qui supprime une tâche
const myTask = document.querySelector(".sous-tache");
      // .sous-tache deviendra .task-container pour intégration code Marion
const deleteBtn = document.querySelector(".gg-close");

deleteBtn.addEventListener("click", function () {
  // for (let i = 0; i < myTask.length; i ++) {
    myTask.remove();
  // }
});

// Coche qui déplace une tâche de A faire vers En cours
const divAFaire = document.querySelector(".afaire");
const checkBtnAFaire = document.querySelector(".gg-check");

checkBtn.addEventListener("click", function () {
  myTask.remove();
  div.append(myTask);
  myTask.classList.remove("afaire");
  myTask.classList.add("encours");
  // essayer myTask.classList.toggle ?
})

// Coche qui déplace une tâche de En cours vers Terminées
const divEnCours = document.querySelector(".encours");
const checkBtnEnCours = document.querySelector(".gg-check");

checkBtn.addEventListener("click", function () {
  myTask.remove();
  div.append(myTask);
  myTask.classList.remove("encours");
  myTask.classList.add("terminee");
})