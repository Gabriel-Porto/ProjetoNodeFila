const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3333

const Queue = require("./Queue")
let filaClientes = new Queue()

app.post("/signup", (req, res) => {
  const { email } = req.body
  const emailAlredyQueued = filaClientes.emailAlreadyQueued(email)
  if (emailAlredyQueued) {
    return res.status(400).json({
      message: "Email already queued",
    })
  }
  const message = filaClientes.push(req.body.email)
  return res.json({ email, message })
})

app.get("/waitingroom/:email", (req, res) => {
  const email = req.params.email

  const queuePosition = filaClientes.findPositionByEmail(email)

  if (!queuePosition) {
    return res.status(404).json({ error: "Email not found" })
  }

  return res.json({
    position: queuePosition,
    email,
    waitTime: `${queuePosition * 10} minutes`,
  })
})

app.get("/queue", (req, res) => {
  return res.json({ Fila: filaClientes.printQueue })
})

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
