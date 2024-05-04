// routes/assistantRoutes.js
const express = require('express');
const assistantController = require('../controllers/assistantController.js');

const router = express.Router();

router.post('/', assistantController.createAssistant);
router.get('/:id', assistantController.getAssistantById);
router.put('/:id', assistantController.updateAssistantById);
router.delete('/:id', assistantController.deleteAssistantById);

module.exports = router;
