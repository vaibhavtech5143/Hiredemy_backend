const mysql = require('mysql2');
const util = require('util');

// Create a pool of connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '2633',
  database: 'hiredemy_backend',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promisify the query method
const query = util.promisify(pool.query).bind(pool);

console.log("Connection pool created");

// Connect to the 'mysql' database first
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
  } finally {
    // Release the connection back to the pool
    connection.release();
  }
});

// Function to create database if not exists
const createDatabase = async () => {
  try {
    await query('CREATE DATABASE IF NOT EXISTS hiredemy_backend');
    console.log('Database created or already exists');
  } catch (err) {
    throw new Error('Error creating database:', err);
  }
};

// Function to use the newly created database
const useDatabase = async () => {
  try {
    await query('USE hiredemy_backend');
    console.log('Using database hiredemy_backend');
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
