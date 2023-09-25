const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p')


const corBory = getComputedStyle(document.body);
const backgroundColorBory = corBory.backgroundColor;
console.log(backgroundColorBory);

 
for (let p of ps){
  p.style.backgroundColor = backgroundColorBory   
  p.style.color = '#fff'
}