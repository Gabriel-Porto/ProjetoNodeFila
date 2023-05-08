const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3333

const Queue = require("./Queue")
let filaClientes = new Queue()

app.post("/signup", (req, res) => {
  const { email } = req.body
  res.json({ email })
  filaClientes.push(req.body.email)
  console.log(filaClientes.length)
})

app.get("/queue", (req, res) => {
  res.json({ Fila: filaClientes.printQueue })
})

app.get("/waitingroom/:email", (req, res) => {
  const { email } = req.params
  let pos

  filaClientes.items.forEach(function (cliente, posAtual) {
    if (filaClientes.items[posAtual] === email) {
      pos = posAtual
    }
  })

  res.json({ posicao: pos + 1})
})

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))