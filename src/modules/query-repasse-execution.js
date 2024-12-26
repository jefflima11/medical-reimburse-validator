// Importa o módulo de conexão com o banco de dados
const connectionDatabase = require("./conn");

// Importa o módulo de formatação de consulta SQL
let formatQuery = require("./f-query");

// Função assíncrona para executar uma consulta SQL
async function executeQuery(cdPrestador, dtComp) {
    // Estabelece a conexão com o banco de dados
    const db = await connectionDatabase(); 
    
    // Obtém a consulta SQL formatada a partir do módulo formatQuery
    const query_repasse = formatQuery();
    
    // Prepara os parâmetros para a consulta SQL
    const binds = {
        cdPrestador: cdPrestador || null, // Usa o valor de cdPrestador ou null se não fornecido
        dtComp: dtComp || null // Usa o valor de dtComp ou null se não fornecido
    };

    // Função para exibir informações formatadas sobre o resultado
    function msg(nmPrestador, descricao, proFat, rowNum, codPrestador) {
        console.log(`Código do prestador: ${nmPrestador} \nPrestador do repasse: ${codPrestador}\nDescrição do repasse: "${descricao}"\nProcedimento: ${proFat}\nPosição: ${rowNum}\n`);
    }

    try {
        // Executa a consulta SQL com os parâmetros fornecidos
        const result = await db.execute(query_repasse, binds); 
        
        // Itera sobre os resultados da consulta
        for (let i = 0; i < result.rows.length; i++) {
            let row = result.rows[i];

            // Exibe informações formatadas sobre cada linha do resultado
            msg(row[0], row[1], row[2], row[3], row[4]);

            // Exibe a descrição do repasse (segunda coluna)
            console.log(row[1]);
        }
    } catch (err) {
        // Captura e exibe qualquer erro ocorrido durante a execução da consulta
        console.error('Erro ao executar a consulta:', err);
    } finally {
        try {
            // Fecha a conexão com o banco de dados
            await db.close();
        } catch (closeErr) {
            // Captura e exibe qualquer erro ocorrido ao fechar a conexão
            console.error('Erro ao fechar a conexão:', closeErr);
        }
    }
}

// Executa a função com parâmetros de exemplo
executeQuery(245, '07/24');
