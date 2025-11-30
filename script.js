const listaContainer = document.querySelector("#lista-container")
const inputFiltro = document.querySelector("#filtro-texto")
const botaoFiltro = document.querySelector('.btn-filtro')
const inventario = [
  { id: 1, nome: 'Caderno', preco: 25.50, estoque: 10 },
  { id: 2, nome: 'Caneta', preco: 3.00, estoque: 50 },
  { id: 3, nome: 'Mochila', preco: 150.00, estoque: 5 },
  { id: 4, nome: 'Lápis', preco: 1.50, estoque: 100 },
  { id: 5, nome: 'Borracha', preco: 2.50, estoque: 20 }
];

botaoFiltro.addEventListener('click', () =>{ 
    filtraItem()
})



function criaItemNome(nome){
    const itemConteudo = document.createElement('p')
    itemConteudo.textContent = nome
    return itemConteudo
}

function criaItemPreco(preco){
    const itemPreco = document.createElement('span')
    itemPreco.textContent = preco
    return itemPreco
}

function criaItemCard(nome, preco){
    const itemCard = document.createElement('article')
    const itemConteudo = criaItemNome(nome)
    const itemPreco = criaItemPreco(preco)
    itemCard.appendChild(itemConteudo)
    itemCard.appendChild(itemPreco)
    listaContainer.appendChild(itemCard)
}

function renderizarLista(dados){
    dados.forEach(a => criaItemCard(a.nome, a.preco))
}

function filtraItem(){
    if(inputFiltro.value == ''){
        alert("Coloque um item válido")
        return
    }
    const inventarioFiltrado = inventario.filter(a => a.nome == inputFiltro.value)
    listaContainer.textContent = ''
    inventarioFiltrado.forEach(b => criaItemCard(b.nome, b.preco))
}

renderizarLista(inventario)
// Ideias: Cria um article que vai armazenar tanto o texto quanto o preço do Item
// Separar cada função por suau responsabilidade