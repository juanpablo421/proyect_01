//Define la funcion suma(add)
function add(a,b){
    return a + b;
}


//Define la funcion Restar(substract)
function substract(a,b){
    return a - b;
}

//Define la funcion Multiplicar(multiply)
function multiply(a,b){
    return a * b;
}

//Define la funcion Dividir(divide)
function divide(a,b){
    if ((b ==0 && a==0)||(b==0)) {
        return `ERROR0:N/A :: VALORES A= ${a} y B =${b}`.bgRed
    }else if (b== 0){
        return `ERROR0:N/A :: VALORES A= ${a} y B =${b}`.bgRed
    }else{
        return a / b;
    }
    }

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
