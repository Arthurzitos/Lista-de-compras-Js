

var lista = document.querySelector('ul')
var produto = document.querySelector('#produto')
var botao = document.querySelector('#btn')

botao.addEventListener('click', addProduto)

function addProduto() {

    var item = '<li> <input type="checkbox"> ' + produto.value + ' <h4>R$:</h4><input type="number" class="number"> </li>'

    lista.innerHTML += item

    produto.value = ''
    produto.focus()

}

//  Capturando a tecla "Enter" do teclado para adicionar elementos:
produto.addEventListener('keyup', function(e) {
    
    //console.log(e.keyCode)

    if (e.keyCode === 13) {
        addProduto()
    }
})
