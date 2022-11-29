const createError = require("http-errors");

const mensalidade = [

    {
        "id": 1,
        "mensalidade": "01",
        "vencimento": "01/01/2022",
        "valor": "500.00",
        "situacao": "Pago"
    },
    {
        "id": 2,
        "mensalidade": "02",
        "vencimento": "01/01/2023",
        "valor": "750.00",
        "situacao": "Em atraso"
    },
    {
        "id": 3,
        "mensalidade": "03",
        "vencimento": "01/02/2023",
        "valor": "1000.00",
        "situacao": "Em atraso"
    }
];

function listarMensalidade(req, res, next) {
    res.json(mensalidade);
};

function exibirMensalidadeId(req, res, next) {
    const localizar = mensalidade.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ Error: "Mensalidade não localizada" });
    }
    res.json(localizar);
};

function atualizarMensalidadeId(req, res, next) {
    const localizar = mensalidade.find(
      (mensalidade) => mensalidade.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ Msg: "Mensalidade não localizada" });
    }
    localizar.mensalidade = req.body.mensalidade;
    localizar.vencimento = req.body.vencimento;
    localizar.valor = req.body.valor;
    localizar.situacao = req.body.situacao;
    res.status(200).json({ Error: "Mensalidade atualizada com sucesso!" });
  }

module.exports = { listarMensalidade, exibirMensalidadeId, atualizarMensalidadeId };