const createError = require("http-errors");

const turma = [

    {
        "id": 1,
        "grupo": "Básico 1",
        "material": "Básico 1, 2 e 3 – English File Elementary Fourth Edition – Students Book + Workbook – Editora: Oxford"
    },
    {
        "id": 2,
        "grupo": "Pré-intermediário 2",
        "material": "Pré-Intermediário 1, 2  e 3 – English File Pre-Intermediate Fourth Edition – Student's Book + Workbook – Editora: OXFORD" 
    },
    {
        "id": 3,
        "grupo": "Intermediário 1",
        "material": "Intermediário 1, 2 e 3 – English File Intermediate Fourth Edition – Students Book + Workbook – Editora: OXFORD"
    }
];

function listarTurma(req, res, next) {
    res.json(turma);
};

function exibirTurmaId(req, res, next) {
    const localizar = turma.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ Error: "Turma não localizada" });
    }
    res.json(localizar);
};

function atualizarTurmaId(req, res, next) {
    const localizar = turma.find(
      (turma) => turma.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ Msg: "Turma não localizada" });
    }
    localizar.grupo = req.body.grupo;
    localizar.material =  req.body.material;
    res.status(200).json({ Error: "Turma atualizado com sucesso!" });
  }

module.exports = { listarTurma, exibirTurmaId, atualizarTurmaId };