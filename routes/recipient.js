const recipientRoute = require ('express').Router();
const RecipientController = require('../controllers/RecipientControllers');

recipientRoute.get('/', RecipientController.get);
recipientRoute.get('/:id', RecipientController.readOne);
recipientRoute.post('/', RecipientController.add);
recipientRoute.delete('/:id', RecipientController.delete);
recipientRoute.put('/:id', RecipientController.update);


module.exports = recipientRoute;