let clickCount = 0;

function darSol() {
  let jardim = document.getElementById("jardim");
  clickCount++;

  // cria 5 girassóis pequenos por clique
  for (let i = 0; i < 5; i++) {
    let flor = document.createElement("div");
    flor.classList.add("flor", "broto");
    flor.innerText = "🌻";

    flor.style.left = Math.random() * 90 + "%";
    flor.style.top = (20 + Math.random() * 70) + "%";

    jardim.appendChild(flor);

    setTimeout(() => {
      flor.classList.remove("broto");
      flor.classList.add("florida");
    }, 500 + i * 300);
  }

  // Girassol especial após 5 cliques
  if (clickCount === 5) {
    let florEspecial = document.createElement("div");
    florEspecial.classList.add("flor", "especial");
    florEspecial.innerText = "🌻";

    florEspecial.style.left = "45%";
    florEspecial.style.top = "30%";

    florEspecial.onclick = () => {
      window.open("https://open.spotify.com/intl-pt/track/7KA4W4McWYRpgf0fWsJZWB?si=efe7de62c6b146dc", "_blank");
    };

    jardim.appendChild(florEspecial);

    // animação para florescer grande
    setTimeout(() => {
      florEspecial.classList.add("florida");
    }, 500);
  }
}