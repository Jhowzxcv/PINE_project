function redirecionar1() {
    window.location.href = "../site arthur pronto/html pgs/pg1.html";
}

function redirecionar2() {
    window.location.href = "../site arthur pronto/html pgs/pg 2.html";
}

function redirecionar3() {
    window.location.href = "../site arthur pronto/html pgs/pg3.html";
}

function redirecionar4() {
    window.location.href = "../site arthur pronto/html pgs/pg 4.html";
}

document.getElementById("Btn1").addEventListener("click", redirecionar1);
document.getElementById("Btn2").addEventListener("click", redirecionar2);
document.getElementById("Btn3").addEventListener("click", redirecionar3);
document.getElementById("Btn4").addEventListener("click", redirecionar4);

function search_animal() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let produtos = document.getElementsByClassName('product');
      
    for (let i = 0; i < produtos.length; i++) { 
        if (!produtos[i].textContent.toLowerCase().includes(input)) {
            produtos[i].style.display = "none";
        } else {
            produtos[i].style.display = "block";  // Alterado para "block" para mostrar o elemento
        }
    }
}