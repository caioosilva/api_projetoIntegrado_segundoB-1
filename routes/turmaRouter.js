var express = require('express');
var router = express.Router();

const turmaController = require('../controllers/turmaController')
const app = express();

// get lista todos os serviços
router.get('/', turmaController.listarTurma);  

// get ID exibe um serviço pelo ID
router.get('/:id', turmaController.exibirTurmaId);

// put ID atualiza um serviço pelo ID
router.put('/:id', turmaController.atualizarTurmasId);

module.exports = router;