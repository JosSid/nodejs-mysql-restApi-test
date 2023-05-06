import { DB_DATABASE } from './src/config/dotenv.js';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
  });
  
  function createDatabaseIfNotExists() {
      connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_DATABASE}`, function (error, results, fields) {
          if (error) throw error;
          console.log('Database created or already exists');
        
          connection.query(`USE ${DB_DATABASE}`, function (error, results, fields) {
            if (error) throw error;
        
            connection.query('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,nombre VARCHAR(255) NOT NULL,mail VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL)', function (error, results, fields) {
              if (error) throw error;
              console.log('Table created or already exists');
              connection.end()
            });
          });
        });
  };
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to database on ${DB_DATABASE}`);
    createDatabaseIfNotExists();
  });


export default connection;