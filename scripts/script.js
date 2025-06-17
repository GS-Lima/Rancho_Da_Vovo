function copiar() {
  const texto = document.getElementById("endereco");
  const pop = document.getElementById("popup");

  navigator.clipboard.writeText(texto.innerText).then(() => {
    pop.classList.add("mostrar");

    setTimeout(() => {
      pop.classList.remove("mostrar");
    }, 500);
  });
}

/*const slideContainer = document.querySelector("#slide-container");
const slideBtn = document.querySelectorAll(".galeria-container button");
const card = document.querySelector(".slider-img").offsetWidth;
const total = document.querySelectorAll(".slider-img").length;

let atualSlide = 0;

slideBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    slideContainer.scrollLeft += btn.id === "prev-button" ? -card : card;

  });
});
*/

const scrollContainer = document.querySelector('#img-slide-container');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

const card = document.querySelector('.slider-img').offsetWidth + 10; // 32 é o gap lateral
const total = document.querySelectorAll('.slider-img').length;


// Botão próximo
nextBtn.addEventListener('click', () => {
  // Calcula a posição máxima de scroll (largura total - largura visível)
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  
  // Verifica se já está no final (com uma margem de tolerância de 5px)
  if (scrollContainer.scrollLeft + 5 >= maxScroll) {
    // Volta para o início
    scrollContainer.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    // Avança para o próximo item
    scrollContainer.scrollBy({
      left: card,
      behavior: 'smooth'
    });
  }
});

// Botão anterior
prevBtn.addEventListener('click', () => {
  if (scrollContainer.scrollLeft <= 5) { // Margem de tolerância
    // Vai para o final
    scrollContainer.scrollTo({
      left: scrollContainer.scrollWidth,
      behavior: 'smooth'
    });
  } else {
    // Volta para o item anterior
    scrollContainer.scrollBy({
      left: -card,
      behavior: 'smooth'
    });
  }
});