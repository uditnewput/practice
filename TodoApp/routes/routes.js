const express = require('express');
const controller = require('../controllers/controller')

const router = express.Router();

router.get('/', controller.index);
router.get('/todo',controller.todo_read);
router.post('/newNote',controller.todo_create);
router.get('/doneNote/:id', controller.todo_status);
router.post('/updateNote', controller.todo_update);
router.get('/deleteNote/:id', controller.todo_delete);
router.get('/404',controller.page_404);

module.exports = router;