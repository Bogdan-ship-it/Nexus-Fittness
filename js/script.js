// script.js

// Exemplu de funcție pentru deschiderea profilului antrenorilor
function openTrainerProfile(name) {
  if (name === "andrei") {
    alert("Profilul lui Andrei: specialist în forță și rezistență.");
  } else if (name === "ana") {
    alert("Profilul Anei: antrenoare specializată în cardio și motivație.");
  }
}

// Butoane din bara laterală
document.getElementById("menuBtn").addEventListener("click", () => {
  alert("Meniul va fi definit ulterior.");
});

document.getElementById("messagesBtn").addEventListener("click", () => {
  alert("Cutia poștală: aici vor apărea mesajele.");
});

document.getElementById("profileBtn").addEventListener("click", () => {
  alert("Profilul tău personal.");
});

document.getElementById("locationBtn").addEventListener("click", () => {
  alert("Locația Nexus Fitness: Strada Exemplu, Chișinău.");
});
