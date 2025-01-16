//file System - Fs e Recursão mútua: 

const fs = require('fs').promises; //fs não precisa fazer caminho pq ele ja tem
const path = require ('path'); // path tambem não precisa de caminhos e ele será usado para tratar dos caminhos.

  async  function readdir(rootDir){
        rootDir = rootDir || path.resolve(__dirname) ;
        const files = await fs.readdir(rootDir);
        walk(files, rootDir);

    }

    async function walk(files){
        for(let file of files){
            const fileFullPath = path.resolve(rootDir,file);
            const stas = await fs.stat(fileFullPath);
        
            if(stas.isDirectory()){
                readdir(fileFullPath);
                continue;
            }

            console.log (file, stas.isDirectory )
        }

        
    }

    readdir('')