import { createPool } from 'mysql2/promise';
import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} from './dotenv.js';

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

setTimeout(() => console.log(`\nConnected to database on ${DB_DATABASE}`), 1);
