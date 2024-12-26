const connectionDatabase = require("../config/connect-oracle-db");

async function executeInsert(cdPrestador, dtComp) {
    const db = await connectionDatabase();

    try {
        const sql = `
            BEGIN
                DBAMV.SP_GERA_REP_HUMS( 
                    PCD_PRESTADOR => ${cdPrestador},
                    PDT_COMPETENCIA => '${dtComp}'
                );
            END;
        `;
        await db.execute(sql);
        
        await db.commit();
        
        console.log('Execução realizada!');
        
    } catch (error) {
        console.error('Erro ao realizar a execução', error.message);
    } finally {
        await db.close();
    }
}
