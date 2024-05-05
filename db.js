const mysql = require('mysql2');
const util = require('util');
require('dotenv').config();

const DB_HOST = process.env.DATABASE_HOST;
const DB_USER = process.env.DATABASE_USER;
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB_NAME = process.env.DATABASE_NAME;

// Create a pool of connections
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,

  database: DB_NAME, // Use the database name from environment variable
  port:3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promisify the query method
const query = util.promisify(pool.query).bind(pool);

console.log("Connection pool created");

// Connect to the database
pool.getConnection(async (err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');

  try {
    // Create the desired database if it doesn't exist
    await createDatabase();
    // Use the newly created database
    await useDatabase();
    // Create the assistants table if it doesn't exist
    await createAssistantTable();
    // Add more table creation functions here if needed
  } catch (err) {
    console.error('Error initializing database:', err);
    throw err;
  } finally {
    // Release the connection back to the pool
    connection.release();
  }
});

// Function to create database if not exists
const createDatabase = async () => {
  try {
    await query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
    console.log(`Database '${DB_NAME}' created or already exists`);
  } catch (err) {
    throw new Error('Error creating database:', err);
  }
};

// Function to use the newly created database
const useDatabase = async () => {
  try {
    await query(`USE ${DB_NAME}`);
    console.log(`Using database '${DB_NAME}'`);
  } catch (err) {
    throw new Error('Error using database:', err);
  }
};

// Function to create the assistants table
const createAssistantTable = async () => {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS assistants (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        department VARCHAR(100) NOT NULL,
        role VARCHAR(100) NOT NULL
      )
    `);
    console.log('Assistants table created or already exists');
  } catch (err) {
    throw new Error('Error creating assistants table:', err);
  }
};

module.exports = pool;
