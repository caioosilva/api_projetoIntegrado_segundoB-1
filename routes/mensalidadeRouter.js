var express = require('express');
var router = express.Router();

const mensalidadeController = require('../controllers/mensalidadeController')
const app = express();

// get lista todos os contatos
router.get('/', mensalidadeController.listarMensalidade);  

// get ID exibe um contato pelo ID
router.get('/:id', mensalidadeController.exibirMensalidadeId);

router.put('/:id', mensalidadeController.atualizarMensalidadeId);

module.exports = router;