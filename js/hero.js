const slides = [

{

titulo:"Transformando uma residência em um moderno Studio.",

descricao:"Conheça todo o processo de desenvolvimento do projeto.",

imagem:"/imagens/Antes x Depois vistas.jfif"

},

{

titulo:"Alisson Junior",

descricao:"Colaborador da empresa.",

imagem:"/imagens/Alisson.png"

},  

{

titulo:"Gustavo",

descricao:"Colabroador da empresa.",

imagem:"/imagens/Gustavo.jpg"

},

{

titulo:"Cláudio",

descricao:"Colaborador da empresa.",

imagem:"/imagens/Claudio.jpg"

},

{

titulo:"Leonardo",

descricao:"Colaborador da empresa.",

imagem:"/imagens/Leonardo.jfif"

}

]

let indice=0;

const titulo=document.getElementById("heroTitulo");

const descricao=document.getElementById("heroDescricao");

const imagem=document.getElementById("heroImagem");

const contador=document.getElementById("slideAtual");

const dots=document.querySelectorAll(".dot");

function atualizarHero(){

titulo.innerHTML=slides[indice].titulo;

descricao.innerHTML=slides[indice].descricao;

imagem.src=slides[indice].imagem;

contador.innerHTML=(indice+1).toString().padStart(2,'0');

dots.forEach(d=>d.classList.remove("active"));

dots[indice].classList.add("active");

}

document.querySelector(".next").onclick=()=>{

indice++;

if(indice>=slides.length){

indice=0;

}

atualizarHero();

}

document.querySelector(".prev").onclick=()=>{

indice--;

if(indice<0){

indice=slides.length-1;

}

atualizarHero();

}

dots.forEach((dot,i)=>{

dot.onclick=()=>{

indice=i;

atualizarHero();

}

});

// troca automática
setInterval(()=>{

indice++;

if(indice>=slides.length){

indice=0;

}

atualizarHero();

},6000);