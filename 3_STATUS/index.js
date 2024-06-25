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
    //Status de Erro
    if(!nome){
        res.status(422).json({message: "Esta Faltando o nome do protudo"})
        return
    }

    console.log(nome)
    console.log(preco)
    //Status de OK
    res.status(201).json({message: `O produto ${nome} foi criado com sucesso com o preço de ${preco}`})
   
})
app.get("/", (req, res) =>{
    //Status de Ok
    res.status(200).json({message: "Primeira rota criada com sucesso"})
})
app.listen(3000)