let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("botao");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Altere 2000 para o intervalo desejado (em milissegundos)
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}




function adicionarProduto(elementId) {
    var contadorElemento = document.getElementById(elementId);
    var contador = parseInt(contadorElemento.textContent);
    contador++;
    contadorElemento.textContent = contador;
    localStorage.setItem(elementId, contador);
}
function removerProduto(elementId) {
    var contadorElemento = document.getElementById(elementId);
    var contador = parseInt(contadorElemento.textContent);
    if(contador >0){
        contador--;
        contadorElemento.textContent = contador;
        localStorage.setItem(elementId, contador);
    }
}

window.onload = function() {
    var carrinho = localStorage.getItem("carrinho");
    var desejos = localStorage.getItem("desejos");
    if (carrinho !== null) {
        document.getElementById("carrinho").textContent = carrinho;
    }
    if (desejos !== null) {
        document.getElementById("desejos").textContent = desejos;
    }
};
window.addEventListener('storage', function(event) {
    if (event.key === 'carrinho') {
        document.getElementById("carrinho").textContent = event.newValue;
    } else if (event.key === 'desejos') {
        document.getElementById("desejos").textContent = event.newValue;
    }
});

