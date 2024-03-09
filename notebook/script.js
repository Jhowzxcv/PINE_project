function redirecionar1() {
    window.location.href = "../site arthur pronto/html pgs/pg6.html";
}

function redirecionar2() {
    window.location.href = "../site arthur pronto/html pgs/pg 5.html";
}

function redirecionar3() {
    window.location.href = "../site arthur pronto/html pgs/pg8.html";
}

function redirecionar4() {
    window.location.href = "../site arthur pronto/html pgs/pg7.html";
}

document.getElementById("Btn1").addEventListener("click", redirecionar1);
document.getElementById("Btn2").addEventListener("click", redirecionar2);
document.getElementById("Btn3").addEventListener("click", redirecionar3);
document.getElementById("Btn4").addEventListener("click", redirecionar4);

function search_product() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let produtos = document.getElementsByClassName('product');
    let produtoEncontrado = false; // Variável para verificar se pelo menos um produto foi encontrado
    
    // Exibir todos os produtos antes de começar a nova pesquisa
    for (let i = 0; i < produtos.length; i++) { 
        produtos[i].style.display = "block";
    }
    
    for (let i = 0; i < produtos.length; i++) { 
        if (!produtos[i].textContent.toLowerCase().includes(input)) {
            produtos[i].style.display = "none";
        } else {
            produtoEncontrado = true; // Um produto foi encontrado
        }
    }
    
    // Se nenhum produto foi encontrado, atualiza o conteúdo da div 'resultado'
    if (!produtoEncontrado) {
        let divResultado = document.getElementById('resultado');
        if (divResultado) {
            divResultado.textContent = 'Produto não encontrado';
        }
    } else {
        // Se algum produto foi encontrado, remove o conteúdo da div 'resultado' se existir
        let divResultado = document.getElementById('resultado');
        if (divResultado) {
            divResultado.textContent = ''; // Remove o conteúdo da div
        }
    }
}


