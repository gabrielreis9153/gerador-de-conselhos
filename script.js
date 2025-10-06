const botao = document.getElementById("botao");
const conselho = document.getElementById("conselho");
const numeroConselho = document.getElementById("numero-conselho");

async function pegarConselho() {
  const resposta = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
  const dados = await resposta.json();

  numeroConselho.innerText = `CONSELHO #${dados.slip.id}`;
  conselho.innerText = `"${dados.slip.advice}"`;
}

botao.addEventListener("click", pegarConselho);

pegarConselho();