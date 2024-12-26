const connectionDatabase = require("./conn");
const consultaPrincipal = require("../../consultaFormatada");
const messageFormat = require("./messageFormat");


async function retornaDados(codigoPrestador, dataCompetencia, procedimentos) {
    const db = await connectionDatabase();
    try {
        // Obtenha a consulta SQL formatada
        let consulta = consultaPrincipal(procedimentos);

        let resultadoConsulta = await db.execute(consulta, {
            dataCompetencia, 
            codigoPrestador  
        });
        
        for (let i = 0; i < resultadoConsulta.rows.length; i++) {
            let row = resultadoConsulta.rows[i];
            messageFormat(row[0], row[1], row[2], row[3], row[4]);
        }

    } catch (error) {
        console.error(`Erro ao realizar a execução: ${error.message}`);
    } finally {
        await db.close();
    }
}

module.exports = retornaDados;