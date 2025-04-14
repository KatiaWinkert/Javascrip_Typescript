const fs = require('fs').promises; 

//importando caminhos
module.exports = (caminho, dados) => {
 fs.writeFile(caminho, dados , {flag: 'w'} )
}
