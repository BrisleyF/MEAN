function encontrarPrimos(){
    const number = document.getElementById("number").value;
    const result = document.getElementById("result");

    const num = parseInt(number);

    if(isNaN(num) || num < 2){
        alert("Inserte un número valido (mayor que 1)");
        return;
    }

    const numerosprimos = [];

    for (let index = 2; index < number; index++) {
        if(esPrimo(index)) {
            numerosprimos.push(index);
        }
    }
    result.innerHTML = `Numeros primos entre 2 y ${number}: ${numerosprimos.join(", ")}`;
}

function esPrimo(index) {
        if(index <=1) return false;
        if(index <=3) return true; // 2 3 

        if(index % 2 === 0 || index % 3 === 0) {
            return false;
        }

        for (let i = 5; i*i <= index; i+= 6) {
            if(index % i === 0 || index % (i + 2) === 0) {
                return false;
            }
        }
        return true;
}