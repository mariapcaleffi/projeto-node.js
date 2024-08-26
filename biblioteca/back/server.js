const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'livros'
});

const create = (req, res) => {
    let nome = req.body.livro;
    let cpf = req.body.autor;
    let nascimento = req.body.desc;
    let sobrenome = req.body.data;

    let query = `INSERT INTO livros (livro, autor, desc, data) VALUE`;
    query += `('${livro}', '${autor}', '${desc}', '${data}')`;

    con.query(query, (err, result) => {
        if (err) {

            console.log("Erro ao cadastrar um livro");
        } else {
            console.log("Livro cadastrado com sucesso");
        }
    })
}
const teste = (req, res) => {
    console.log("Funcionando");
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", teste);
app.post("/", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})