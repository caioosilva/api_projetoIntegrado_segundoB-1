var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioController')
const app = express();

// get lista todos os usuários
router.get('/', usuarioController.listarUsuario);  

// get ID exibe um usuário pelo ID
router.get('/:id', usuarioController.exibirUsuarioID);

// post cria um novo usuário
router.post('/', usuarioController.criarUsuario);

// put ID atualiza um usuário pelo ID
router.put('/:id', usuarioController.atualizarUsuario);

// delete ID remove um usuário pelo ID
 router.delete('/:id', usuarioController.removerUsuario); 

module.exports = router;