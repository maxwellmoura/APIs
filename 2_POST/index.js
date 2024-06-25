const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
//Rotas - Endpoints
app.post("/criarprodutos", (req, res) =>{
    const nome = req.body.nome
    const preco = req.body.preco

    console.log(nome)
    console.log(preco)
    res.json({message: `O produto ${nome} foi criado com sucesso`})
})
app.get("/", (req, res) =>{
    res.json({message: "Primeira rota criada com sucesso"})
})
app.listen(3000)