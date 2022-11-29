const bcrypt = require('bcryptjs');
const Cadastro = require('../models/usuarioModel');

async function registrar(req,res){
    const cadastro = new Cadastro(req.body);
    cadastro.password = await bcrypt.hashSync(cadastro.password, 8);
    await cadastro.save()
    .then(doc => {
        doc.password = undefined;
        return res.status(201).json(doc);
    })
    .catch(error => {
        const msg = {};
        if(error.errors){
            Object.values(error.errors)
            .forEach(({properties}) => {
                msg[properties.path] = properties.msg;
            });
        }
        if(error.code == 11000){
            msg["Usuario existente"] = "Esse e-mail ja foi cadastrado";
        }
        return res.status(422).json(msg);
    });
}
async function login(req,res){
    const {email, password} = req.body;
    await Cadastro.findOne({email})
    .select({password: 1})
    .then(async doc => {
        if(!doc){
            return res.status(404).json({ erro: 'Usuario não existente'});
        }
        const senha = await bcrypt.compareSync(password, doc.password);
        if (!senha) {
            return res.status(400).json({ erro: 'Senha invalida'});
        }
        return res.json({email: email, token: "josias"});
    })
    .catch(error => {
        return res.status(500).json(error);
    });
}

module.exports = {registrar, login}