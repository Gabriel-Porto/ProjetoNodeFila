const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3333

const Queue = require("./Queue")
let filaClientes = new Queue()

app.post("/cadastro", (req, res) => {
  const { email } = req.body
  res.json({ email })
  filaClientes.push(req.body.email)
  console.log(filaClientes.length)
})

app.get("/espera/:email", (req, res) => {
  const { email } = req.params.email

  filaClientes.items.forEach(function (cliente, index) {
    if (filaClientes.items[index] === email) {
      return index
    }
  })

  console.log(filaClientes.printQueue)
  res.send("user " + filaClientes.printQueue)
})

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))