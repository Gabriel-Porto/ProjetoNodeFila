const express = require("express")
const app = express()
app.use(express.json()) //ESPECIFICA O FORMATO DOS REQUEST EM JSON
const PORT = 3333

const Queue = require("./Queue")
const filaClientes = new Queue()

app.post("/", (req, res) => {
  const { name } = req.body

  filaClientes.push(res.json({ name }))
  console.log(name)
  console.log(filaClientes.get())
})

app.get("/getlist", (req, res) => {
  const { filaClientes } = req.body
})

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
