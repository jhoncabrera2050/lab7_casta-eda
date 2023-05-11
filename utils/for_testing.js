// invertir lo que viene en una cadena
const palindrome = (string) => {

   if(typeof string == 'undefined') return

   return string
   // para contar cuantas palabras viene
     .split('')
     .reverse()
     .join('')
}

const average = array => {
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

function calcularAreaDeCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function area(b,h){
    return (b*h)/2;
}

// const piramide = array => {
//     let sum = 0;
//     array.forEach(num => { sum += num });
//     return sum / array.length;
// }

module.exports = {
    palindrome,
    average,
    calcularAreaDeCirculo,
    area
}