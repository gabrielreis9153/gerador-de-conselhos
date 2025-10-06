const botao = document.getElementById("botao");
const conselho = document.getElementById("conselho");
const numeroConselho = document.getElementById("numero-conselho");

async function pegarConselho() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar conselho: ${resposta.status} ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    if (!dados.slip || !dados.slip.advice) {
      throw new Error("Resposta inesperada da API.");
    }

    numeroConselho.innerText = `CONSELHO #${dados.slip.id}`;
    conselho.innerText = `"${dados.slip.advice}"`;

  } catch (erro) {
    console.error("Erro ao pegar conselho:", erro);
    numeroConselho.innerText = "Erro 😢";
    conselho.innerText = "Não foi possível carregar o conselho. Tente novamente.";
  }
}

botao.addEventListener("click", pegarConselho);

pegarConselho();
