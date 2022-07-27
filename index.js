import { romanize, deromanize } from "./node_modules/romans/romans.js"; 

const number = document.getElementById('number');
const roman = document.getElementById('roman');
const romanFinal = document.getElementById('romanFinal');
const numberFinal = document.getElementById('numberFinal');

const numberToRoman = e => {
    try { 
        romanFinal.innerText = "Roman: " + romanize(parseInt(e.target.value));
    }
    catch(err) {
        romanFinal.innerText = err.message;
    }
}

const romanToNumber = e => {
    try {
        numberFinal.innerText = "Number: " + deromanize(e.target.value);
    }
    catch(err) {
        numberFinal.innerText = err.message;
    }
}

number.addEventListener('change', e => numberToRoman(e)); 
number.addEventListener('keyup', e => numberToRoman(e)); 
roman.addEventListener('keyup', e => romanToNumber(e)); 