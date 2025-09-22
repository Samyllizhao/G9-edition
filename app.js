let amigos = [];     //lista de amigos
let sorteados = [];  // lista de sortados

function adicionarAmigo(nomeAmigo){
    nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome.');
    } else {
        if (amigos.includes(nomeAmigo)){                  //verificar se o nome ja esta na lista
            alert("Esse nome já existe na lista."); 
        }else {         
            amigos.push(nomeAmigo);                       //adiciona o nome a lista "amigos"
            document.querySelector('input').value = '';   //esvazia a lista 
            atualizarListaDeAmigos();                     //carregar lista 
        }
    } 
}

function atualizarListaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++){ 
        let li = document.createElement('li');             //cria um elemento no html chamdo li 
        li.textContent = amigos[i];
        lista.appendChild(li);                             //adiciona a lista ao li 
    }
}

function sortearAmigo(){
    if (sorteados.length === amigos.length) {
    document.getElementById('resultado').innerHTML = "Todos os amigos já foram sorteados!";
    return;
    }

    let indice = Math.floor(Math.random() * amigos.length);

    while(sorteados.includes(indice)){
        indice = Math.floor(Math.random() * amigos.length);
    }
    let nomeSorteado = amigos[indice];

    sorteados.push(indice);
    document.getElementById('resultado').innerHTML = nomeSorteado;   
}

function limparLista(){
    amigos = [];
    sorteados = [];
    document.getElementById('listaAmigos').innerHTML = ''; // limpa a lista na tela
    document.getElementById('resultado').innerHTML = '';   // limpa o resultado sorteado
    atualizarListaDeAmigos();
}