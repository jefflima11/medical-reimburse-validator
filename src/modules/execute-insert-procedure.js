// Importa o módulo de conexão com o banco de dados
const connectionDatabase = require("./conn");

// Função assíncrona para executar uma procedure de inserção no banco de dados
async function executeInsert(cdPrestador, dtComp) {
    // Estabelece a conexão com o banco de dados
    const db = await connectionDatabase();

    try {
        // Define a consulta SQL para chamar a procedure PL/SQL
        const sql = `
            BEGIN
                DBAMV.SP_GERA_REP_HUMS( 
                    PCD_PRESTADOR => ${cdPrestador},
                    PDT_COMPETENCIA => '${dtComp}'
                );
            END;
        `;
        // Executa a consulta SQL
        await db.execute(sql);
        
        // Comita a transação para garantir que as mudanças sejam persistidas
        await db.commit();
        
        console.log('Execução realizada!');
        
    } catch (error) {
        // Captura e exibe qualquer erro ocorrido durante a execução
        console.error('Erro ao realizar a execução', error.message);
    } finally {
        // Fecha a conexão com o banco de dados
        await db.close();
    }
}

// Executa a função com parâmetros de exemplo (Código prestador, Competência no formato 'MM/YY')
executeInsert(245, '07/24');
