import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    if(erro.code == 'ENOENT'){
        throw new Error(chalk.red(erro.code, 'Arquivo não encontrado.'));
    }
    if(erro.code == 'EISDIR'){
        throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho fornecido.'));
    }
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    });
}


pegaArquivo('./arquivos/README.mds');