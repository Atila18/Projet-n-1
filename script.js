// Bouton supprimer
const supprimer = document.querySelector(".sup");
const enlever = document.querySelector(".supp");
const confirmer = document.querySelector(".confirmer");

confirmer.addEventListener("click", function () {
  let = confirm("Êtes-vous sûr de vouloir supprimer?");
  supprimer.remove();
  enlever.remove();
});
