// Entradas
const form = document.getElementById("entradaForm");
const lista = document.getElementById("listaEntradas");

let entradas = JSON.parse(localStorage.getItem("diario")) || [];

function renderEntradas() {
  lista.innerHTML = "";
  entradas.forEach((e, i) => {
    const li = document.createElement("li");
    li.textContent = `${e.data} - ${e.titulo}: ${e.descricao}`;
    const btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.onclick = () => {
      entradas.splice(i, 1);
      localStorage.setItem("diario", JSON.stringify(entradas));
      renderEntradas();
    };
    li.appendChild(btn);
    lista.appendChild(li);
  });
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const entrada = {
    titulo: document.getElementById("titulo").value,
    descricao: document.getElementById("descricao").value,
    data: document.getElementById("data").value
  };
  entradas.push(entrada);
  localStorage.setItem("diario", JSON.stringify(entradas));
  renderEntradas();
  form.reset();
});

renderEntradas();

// PWA instalação
let deferredPrompt;
const installBtn = document.createElement("button");
installBtn.textContent = "Instalar Diário de Bordo";
installBtn.style.display = "none";
installBtn.id = "installBtn"; // para estilizar via CSS
document.body.appendChild(installBtn);

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";

  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Usuário aceitou instalar!");
      } else {
        console.log("Usuário recusou a instalação.");
      }
      deferredPrompt = null;
      installBtn.style.display = "none";
    });
  });
});

