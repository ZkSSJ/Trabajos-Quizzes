let cupones = [];

document.getElementById("generar").addEventListener("click", function(){
    let nuevocupon = generarCupon(10);
    cupones.push(nuevocupon);
    document.getElementById("cupongenerado").innerText = "Este es tu nuevo Cupón: "+nuevocupon;
    console.log("Cupones disponibles: ", cupones);
});

document.getElementById("validar").addEventListener("click", function(){
    let inputCode = document.getElementById("ingresarcupon")?.value.trim();
    if (!inputCode) return;
    let messageElement = document.getElementById("mensaje");

    if (cupones.includes(inputCode)){
        messageElement.innerText = "¡Cupón Válido!";
        messageElement.className = "valid";
        cupones = cupones.filter(c => c !== inputCode);
        console.log("Cupón usado y eliminado: ", inputCode);
    } else {
        messageElement.innerText = "Cupón invalido/usado.";
        messageElement.className = "invalid";
        console.log("Ha fallado el uso del cupón: ", inputCode);
    }
});

function generarCupon(longitud){
    let caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXY1234567890";
    let codigo = "";
    for (let i = 0; i < longitud; i++){
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));

    }
    return codigo;
}