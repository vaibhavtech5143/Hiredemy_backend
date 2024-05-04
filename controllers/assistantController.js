const Assistant = require('../models/Assistant');
const assistantValidator = require('../validators/assistantValidator');

function createAssistant(req, res) {
  const data = req.body;
  try {
    const parsedData = assistantValidator.parse(data);
    Assistant.createAssistant(parsedData, (err, assistantId) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating assistant' });
      }
      res.status(201).json({ id: assistantId });
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

function updateAssistantById(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const parsedData = assistantValidator.parse(data);
    Assistant.updateAssistantById(id, parsedData, (err) => {
      if (err) {
        return res.status(404).json({ error: err.message });
      }
      res.json({ message: 'Assistant updated successfully' });
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

function getAssistantById(req, res) {
  const id = req.params.id;

  Assistant.getAssistantById(id, (err, assistant) => {
    if (err) {
      return res.status(404).json({ error: err.message });
    }
    res.json(assistant);
  });
}

function deleteAssistantById(req, res) {
  const id = req.params.id;

  Assistant.deleteAssistantById(id, (err) => {
    if (err) {
      return res.status(404).json({ error: err.message });
    }
    res.json({ message: 'Assistant deleted successfully' });
  });
}

module.exports = {
  createAssistant,
  getAssistantById,
  updateAssistantById,
  deleteAssistantById
};
