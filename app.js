let amigos = []; //lista de amigos

function adicionarAmigo(nomeAmigo){
    nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome.');
    } else {
        if (amigos.includes(nomeAmigo)){
            alert("Esse nome já existe na lista.");
        }else {         
            amigos.push(nomeAmigo); //adiciona o nome a lista >amigos<
            document.querySelector('input').value = ''; //esvazia lista
            atualizarListaDeAmigos(); //chama carregar lista 
        }
    } 
}

function atualizarListaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //limpa lista

    for (let i = 0; i < amigos.length; i++){ // iniciacao -> condicao -> incremento entao cria variavel, se i e menor que tam da lista, incrementa.
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li); 
    }
}

function sortearAmigo(){
    if( amigos.length === 0 ){
        alert("Por favor, insira um nome.");
    } else{
        let indice = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[indice];
        document.getElementById('resultado').innerHTML = nomeSorteado
    }
}

function limparLista(){
    if(amigos.length){
        amigos = []
        document.getElementById('listaAmigos').innerHTML = ''; // limpa a lista na tela
        document.getElementById('resultado').innerHTML = ''; // limpa o resultado sorteado
        atualizarListaDeAmigos()
    }else{
        alert('Nada para limpar.')
    }
}