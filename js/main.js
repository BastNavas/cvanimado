"use strict";
const root = document.getElementById("root");
const botonMenu = document.querySelector(".boton-menu");
const circle = document.querySelector(".circle");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const photo = document.querySelector(".photo");
const poligono = document.querySelector(".poligono");
const secciones = document.querySelector(".secciones");
const caja1 = document.getElementById("caja1");
const about = document.getElementById("btnAbout");
const btnHome = document.getElementById("btnHome");
const tableAbout = document.getElementById("self");
const dataself = document.querySelector(".dataself");
const backself = document.querySelector(".backhome");
const form = document.getElementById("formulario");
const others = document.getElementById("others");
const more = document.getElementById("acerca");
const barra = document.getElementById("barra");
const flecha = document.querySelector(".next");
const capa = document.getElementById("capa");
const capa2 = document.getElementById("capa2");
const subcapa = document.getElementById("subcapa");

function restart() {
  circle.classList.toggle("show");
  list.classList.toggle("list2");
  photo.classList.toggle("ocult");
  title.classList.toggle("title2");
  this.classList.toggle("cerrar");
}

let value = 0;
let num = 0;
const width = document.querySelector(".contenedor");
window.addEventListener("resize", () => {
  x = width.clientWidth;
});

let x = width.clientWidth;
const mover = () => {
  value++;
  num++;
  secciones.style.transform = `translate(${-x * value}px)`;
  if (value === 2) {
    setTimeout(() => {
      flecha.className = "arriba";
    }, 200);
    value = -1;
  } else {
    setTimeout(() => {
      flecha.className = "next";
    }, 200);
  }
  if (num == 3) {
    num = 0;
    window.location.href = "#root";
  }
};
botonMenu.addEventListener("click", restart);
flecha.addEventListener("click", mover);

const showAbout = () => {
capa.style.width="100%"
setTimeout(()=>{
  tableAbout.style.display="block"
},1000)

};

const showHome = () => {
  capa2.id="showcapa2"
  setTimeout(()=>{
    subcapa.style.marginLeft=0;
  },1000)
 
  };

const closeAbout = () => {
  capa.style.width="10px"
  tableAbout.style.display="none"
};
about.addEventListener("click", showAbout);
more.addEventListener("click", showAbout);


backself.addEventListener("click", closeAbout);

btnHome.addEventListener("click", showHome);
capa2.addEventListener("click", ()=>{
capa2.id="capa2"
subcapa.style.marginLeft="100%";
});
const send = (e) => {
  e.preventDefault();
  alert("aun trabajo en el backend")
};
form.addEventListener("submit", send);

