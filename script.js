function fahrenheit() {
    let temperaturaResultado=0;
    const temperaturaInput = document.getElementById("temperatura");
    const temperatura = parseFloat(temperaturaInput.value);
    temperaturaResultado = (temperatura* (9/5)) + 32; 
    console.log(temperaturaResultado);
    const mostrar = document.getElementById('mostrarF');
    mostrar.textContent=`El resultado de la conversion a Fahrenheit es :${temperaturaResultado.toFixed(2)}`;

}

function kelvin() {
    let temperaturaResultado=0;
    const temperaturaInput = document.getElementById("temperatura");
    const temperatura = parseFloat(temperaturaInput.value);
    temperaturaResultado = temperatura + 273.15 ; 
    console.log(temperaturaResultado);

    const mostrar = document.getElementById('mostrarK');
    mostrar.textContent=`El resultado de la conversion a Kelvin es :${temperaturaResultado.toFixed(2)}`;

}

