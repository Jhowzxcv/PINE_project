function MudarCor(id){
    var lugIMG = document.getElementById(`lugimg`)
    const model = `            <img class="imgProduto" src="../../PineEcoPhoneAqua${id}.png" alt="" style="height: 500px;" >`
    lugIMG.innerHTML=model
}
var quantProduto = 1
function aumentarQuant(){
    quantProduto++
    atualizarQuant()
}

function diminuirQuant(){
    if(quantProduto == 1){
        quantProduto = 1
        return
    }
    quantProduto--
    atualizarQuant()
    
}
function atualizarQuant(){
    var lugQuant = document.getElementById('lugQuant')
    lugQuant.innerHTML=quantProduto
}
atualizarQuant()

document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.getElementById('comment-text');
  
    textArea.addEventListener('input', function () {
      const lineBreaks = (textArea.value.match(/\n/g) || []).length;
      const totalCharacters = textArea.value.length;
  
      // Defina o número mínimo de linhas e o número máximo de caracteres por linha conforme necessário
      const minLines = 1;
      const maxCharactersPerLine = 20;
  
      // Calcula o número de linhas com base no número de quebras de linha e caracteres
      const lines = Math.max(minLines, Math.ceil(totalCharacters / maxCharactersPerLine), lineBreaks + 1);
  
      textArea.rows = lines;
    });
  });

  function aparecerComen() {
 var commentTextValue = document.getElementById("comment-text").value;
 document.getElementById("comentario-exibido").innerHTML = "Comentário: " + commentTextValue;

}





