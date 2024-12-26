require('dotenv').config();
const oracledb = require('oracledb');

const config = {
  user: process.env.DB_USER,         
  password: process.env.DB_PASSWORD,       
  connectString: process.env.DB_CONNECTION_STRING
};

// Necessário para a versão atual do banco Oracle
oracledb.initOracleClient({ libDir: '' });

async function connectToOracle() {
  let connection;

  try {
    connection = await oracledb.getConnection(config);
    // console.log('Conectado ao Oracle!');
    return connection; 
  } catch (err) {
    console.error('Erro ao conectar ao Oracle:', err);
    throw err;
  }
}

module.exports = connectToOracle; 
