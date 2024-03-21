const formIMC = document.getElementById('formIMC');
const resultElement = document.getElementById('result');

formIMC.addEventListener('submit', function (event) {
 event.preventDefault();

 const nomeUser = document.getElementById('nomeUser').value;
 const peso = document.getElementById('peso').value;
 const altura = document.getElementById('altura').value;


 const imc = peso / (altura * altura);


 let result = imc.toFixed(1);
 const partes = result.split('.');
 if (partes[0].length > 3) {
    partes[0] = partes[0].substring(0, 1);
    result = partes.join('.');
 }



 function resultadoRadio() {
    const inputs = document.getElementsByName('gender');
    let valorSelecionado;



    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        valorSelecionado = inputs[i].value;
        break;
      }
    }
    return valorSelecionado;
 }



 const valorSelecionado = resultadoRadio();

 let categoriasIMC;
 if (valorSelecionado === 'fem') {
    categoriasIMC = {
      'abaixo do peso': [0, 18.5],
      'peso normal': [18.5, 24.9],
      'sobrepeso': [24.9, 29.9],
      'obesidade': [30, Infinity]
    };
 } else if (valorSelecionado === 'masc') {
    categoriasIMC = {
      'abaixo do peso': [0, 20],
      'peso normal': [20, 24.9],
      'sobrepeso': [25, 29.9],
      'obesidade': [30, Infinity]
    };
 }


 let categoria = ''; // Defina a variável categoria aqui, no escopo correto
 for (let key in categoriasIMC) {
    let intervalo = categoriasIMC[key];
    if (imc >= intervalo[0] && imc < intervalo[1]) {
      categoria = key;
      break;
    }
 }
 

 resultElement.textContent = nomeUser + ', o seu IMC é ' + result + ' e indica ' + categoria + '.';
});
