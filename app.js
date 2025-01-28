let amigos = [];

function limpiarCaja(caja){
    document.querySelector(caja).value = '';
}

function agregarAmigo(){
    let amigoInput = document.getElementById('amigo').value;
    if(amigoInput == ''){
        alert('Por favor, inserte un nombre');
        limpiarCaja('#amigo');
    }else{
        amigos.push(amigoInput);
        limpiarCaja('#amigo');
        listarAmigos();
    }
    ///console.log(amigos);
    return;
}

function listarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}