// const prestadorEGrupo = require("./prestadorGrupo");

// function escolhendoPrestadorOuGrupo (input, tipo) {
//     if (tipo = 'p') {
//         let inputGrupo = prestadorEGrupo.filter(input);
//     }
// };

function retornaProcedimentoGrupo(inputGrupo) {
    let outputProcedimentos = 'teste';

    if (inputGrupo == 1) {
        outputProcedimentos = [
            "99990135", "99990037", "99990038", "99990039", "99990040",
            "99990041", "99990042", "99990043", "99990044", "99990045",
            "99990046", "99990047", "99990048", "99990049"
        ];
    } else if(inputGrupo == 2) {
        outputProcedimentos = ["31303188"];
    } else if(inputGrupo == 3) {
        outputProcedimentos = ["10101006"];
    } else if(inputGrupo == 4) {
        outputProcedimentos = ["01000118", "03010113"];
    } else {
        outputProcedimentos = "valores não encontrados";
    }


    let regra = retornaRegraDeProcedimentos(outputProcedimentos.length);
    
    
    return retornaTipoDeFiltro(regra, outputProcedimentos, inputGrupo);
}

function retornaRegraDeProcedimentos(tamanho) {
    if (tamanho >= 2) {
        return 1;
    } else {
        return 2;
    }
}

function retornaTipoDeFiltro(regra, outputProcedimentos, inputGrupo) {
    
    if (regra = 1 ) {
        return `AND IRF.CD_PRO_FAT IN (${outputProcedimentos.filter(teste => inputGrupo).map(value => `'${value}'`).join(', ')})`;
        // console.
    } else if(regra >= 2 ) {
        return `AND IRF.CD_PRO_FAT = '${outputProcedimentos.filter(inputGrupo => inputGrupo).map(value => `'${value}'`).join(', ')}'`;
    }else {
        console.log("Retorno de tipo de filtro invalido.");
    }

}

// retornaProcedimentoGrupo(1);

module.exports = { retornaProcedimentoGrupo };

