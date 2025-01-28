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
    }
    ///console.log(amigos);

    
    return;
}