const numero = Number(prompt('Digite um número')); 
const numeroTitulo = document.getElementById('numero-titulo');
const umTexto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;
umTexto.innerHTML += `<p>Seu numero + 2 é ${numero + 2}</p>`;
umTexto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
umTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
umTexto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
umTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
umTexto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
umTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;