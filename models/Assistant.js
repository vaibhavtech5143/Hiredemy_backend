// models/Assistant.js
const pool = require('../db');
let connection = pool;

function createAssistant(data, callback) {
  const sql = 'INSERT INTO assistants (name, mobile, email, salary, city, country, department, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [data.name, data.mobile, data.email, data.salary, data.city, data.country, data.department, data.role];
  
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error creating assistant:', err);
      return callback(err);
    }
    callback(null, result.insertId);
  });
}

function getAssistantById(id, callback) {
  const sql = 'SELECT * FROM assistants WHERE id = ?';
  
  connection.query(sql, id, (err, result) => {
    if (err) {
      console.error('Error getting assistant:', err);
      return callback(err);
    }
    if (result.length === 0) {
      return callback(new Error('Assistant not found'));
    }
    callback(null, result[0]);
  });
}

function updateAssistantById(id, data, callback) {
  const sql = 'UPDATE assistants SET name=?, mobile=?, email=?, salary=?, city=?, country=?, department=?, role=? WHERE id=?';
  const values = [data.name, data.mobile, data.email, data.salary, data.city, data.country, data.department, data.role, id];
  
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error updating assistant:', err);
      return callback(err);
    }
    if (result.affectedRows === 0) {
      return callback(new Error('Assistant not found'));
    }
    callback(null);
  });
}

function deleteAssistantById(id, callback) {
  const sql = 'DELETE FROM assistants WHERE id = ?';
  
  connection.query(sql, id, (err, result) => {
    if (err) {
      console.error('Error deleting assistant:', err);
      return callback(err);
    }
    if (result.affectedRows === 0) {
      return callback(new Error('Assistant not found'));
    }
    callback(null);
  });
}

module.exports = {
  createAssistant,
  getAssistantById,
  updateAssistantById,
  deleteAssistantById
};
