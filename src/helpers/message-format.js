function messageFormat(nmPrestador, descricao, proFat, rowNum, codPrestador) {
    console.log(`Código do prestador: ${nmPrestador} \nPrestador do repasse: ${codPrestador}\nDescrição do repasse: "${descricao}"\nProcedimento: ${proFat}\nPosição: ${rowNum}\n`);
}

module.exports = messageFormat;