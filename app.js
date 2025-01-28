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
    return;
}

let flag = 0;

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    ///declaracion y aleatorizacion de index
    let cantidadIndex = amigos.length;
    let sorteado = Math.floor(Math.random()*cantidadIndex);

    ///seleccion del elemento donde mostrar el resultado
    let resultado = document.getElementById("resultado");

    let item = document.createElement('li');
    item.textContent = amigos[sorteado];

    if (flag==0) {
        resultado.appendChild(item);
        flag=1;
    } else {
        resultado.innerHTML = "";
        resultado.appendChild(item);
    }

    return;
}