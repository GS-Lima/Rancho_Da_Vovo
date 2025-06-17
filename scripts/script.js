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



const scrollContainer = document.querySelector('#img-slide-container');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');

const card = document.querySelector('.slider-img').offsetWidth + 10;
const total = document.querySelectorAll('.slider-img').length;


// Botão próximo
nextBtn.addEventListener('click', () => {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  
  if (scrollContainer.scrollLeft + 5 >= maxScroll) {
    scrollContainer.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    scrollContainer.scrollBy({
      left: card,
      behavior: 'smooth'
    });
  }
});

// Botão anterior
prevBtn.addEventListener('click', () => {
  if (scrollContainer.scrollLeft <= 5) {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollWidth,
      behavior: 'smooth'
    });
  } else {
    scrollContainer.scrollBy({
      left: -card,
      behavior: 'smooth'
    });
  }
});
