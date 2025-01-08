//todo arquivo JavasCript no node é um modulo especifico

//modulo
const path = require('path'); //(sistema de modulos) CommonJS > importar path modulo que esta dentro do node e trabalha com caminhos


//exportar é similar um return objeto dentro é a configuração do webpack
//exportar 

module.exports = {
 mode: 'development', 
 entry: './src/index.js',
 output: { 
    path: path.resolve(__dirname, 'public', 'assets', 'js' ),
    filename: 'bundle.js'
 }, 
 module: {
    rules: [{
        exclude: /node_modules/,
        test: /\.js$/, 
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env']
            }
        }
    }]
 }, 
 devtool: 'source-map'
};
