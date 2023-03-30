
var inputQtde = document.querySelector('#box')
inputQtde.addEventListener("change", atualizarOrcamento)
document.querySelector('#sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#nao').addEventListener("change", atualizarOrcamento)
document.querySelector('#LIVRO1').addEventListener("change", atualizarOrcamento)
document.querySelector('#LIVRO2').addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let LIVRO1 = document.querySelector("#LIVRO1").value
    let LIVRO2 = document.querySelector("#LIVRO2").value

    let preco = (LIVRO2 * 57.60) + (LIVRO1 * 57.60)
    
    let boxL = document.querySelector("#sim").checked
    if(boxL) {preco += 150}

    let output = document.querySelector('#secao-orcamento form output')
    output.innerHTML = "R$ " + preco.toFixed(2)
    console.log(boxL)
}