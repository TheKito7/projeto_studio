// Atualize os caminhos (src) para os seus arquivos .pdf reais
const documentos = [
    {
        src: "../imagens/Terrop FIN.pdf", // O primeiro item que estava vazio
        titulo: "Planta Baixa - Pavimento Térreo"
    },
    {
        src: "../imagens/PavSuper FIN.pdf", // Exemplo de PDF 2
        titulo: "Planta Baixa - Pavimento Superior"
    },
    {
        src: "../imagens/CorteAB.pdf", // Exemplo de PDF 3
        titulo: "Corte AB"
    },
    {
        src: "../imagens/corteBB.pdf", // Exemplo de PDF 3
        titulo: "Corte BB"
    },
    {
        src: "../imagens/VistaAA.pdf", // Exemplo de PDF 3
        titulo: "Vista AA"
    },
    {
        src: "../imagens/VistaBB.pdf", // Exemplo de PDF 3
        titulo: "Vista BB"
    },

    // ... adicione o resto dos PDFs aqui seguindo o mesmo padrão
];

let indice = 0;

// Agora o JavaScript vai pegar o iframe pelo ID
const visualizador = document.getElementById("imagemPrincipal");
const titulo = document.getElementById("tituloImagem");
const contador = document.getElementById("contador");
const thumbs = document.querySelectorAll(".thumb");

function atualizar() {
    // Troca o arquivo PDF que está sendo exibido no iframe
    visualizador.src = documentos[indice].src;
    
    // Atualiza os textos
    titulo.innerHTML = documentos[indice].titulo;
    contador.innerHTML = `${indice + 1} / ${documentos.length}`;

    // Atualiza a marcação das miniaturas (thumbs)
    thumbs.forEach(t => t.classList.remove("ativa"));
    if(thumbs[indice]) {
        thumbs[indice].classList.add("ativa");
    }
}

// === OS BOTÕES CONTINUAM IGUAIS ===
document.getElementById("proximo").onclick = () => {
    indice++;
    if (indice >= documentos.length) {
        indice = 0;
    }
    atualizar();
}

document.getElementById("anterior").onclick = () => {
    indice--;
    if (indice < 0) {
        indice = documentos.length - 1;
    }
    atualizar();
}

thumbs.forEach((thumb) => {
    thumb.onclick = () => {
        indice = Number(thumb.dataset.indice);
        atualizar();
    }
});