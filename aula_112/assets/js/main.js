// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

 async function carregaPagina(el) {

  try {

      const href = el.getAttribute('href');
  const response = await fetch(href);
  
  if(response.status !== 200 ) throw new Error('ERROR 404');

  const html = await response.text();
  
  carregaResultado(html); 
    
  } catch (e) {

    console.log(e);
    
  }

}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

//fecth por padrão já retorna uma promise, ou seja, não precisa criar ela. 
// fetch('pagina_1.html')
//  .then(resposta =>{
//   if(resposta.status !== 200 ) throw new Error('ERROR 404 Nosso');
//   return resposta.text(); 
//  })
//   .then(html => console.log(html))
//   .catch(e => console.log(e));