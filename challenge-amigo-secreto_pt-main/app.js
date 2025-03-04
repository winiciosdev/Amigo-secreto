const inputAmigo = document.getElementById('amigo'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado'); 
const buttonAdd = document.querySelector('.button-add'); 
const buttonDraw = document.querySelector('.button-draw'); 


let amigos = [];


function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim(); 

    
    if (nomeAmigo === '') {
        alert('Nome adicionado!');
        return; 
    }

    
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    
    amigos.push(nomeAmigo);

    
    atualizarListaAmigos();

    
    inputAmigo.value = '';

    
    resultado.innerHTML = '';
}


function atualizarListaAmigos() {
    
    listaAmigos.innerHTML = '';

    
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li'); 
        itemLista.textContent = amigo; 
        listaAmigos.appendChild(itemLista); 
    });
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return; 
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

buttonAdd.addEventListener('click', adicionarAmigo);
buttonDraw.addEventListener('click', sortearAmigo);