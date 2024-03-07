function redirecionar1() {
    window.location.href = "../site arthur pronto/html pgs/pg9.html";
}

function redirecionar2() {
    window.location.href = "../site arthur pronto/html pgs/pg10.html";
}

document.getElementById("Btn1").addEventListener("click", redirecionar1);
document.getElementById("Btn2").addEventListener("click", redirecionar2);

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