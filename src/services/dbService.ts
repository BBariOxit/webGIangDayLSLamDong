// src/services/dbService.ts
import { ConnectionPool } from 'mssql';

const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'your_database',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  const pool = new ConnectionPool(config);
  await pool.connect();
  return pool;
}

// Example usage:
// const pool = await getConnection();
// const result = await pool.request().query('SELECT * FROM Region');
