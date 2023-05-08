const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3333;

const Queue = require("./Queue");
let filaClientes = new Queue();

app.post("/cadastro", (req, res) => {
  const { email } = req.body;
  const emailAlredyQueued = filaClientes.peek(email);
  if (emailAlredyQueued) {
    return res.status(400).json({
      message: "Email already queued",
    });
  }
  const message = filaClientes.push(req.body.email);
  return res.json({ email, message });
});

app.get("/espera/:email", (req, res) => {
  const email = req.params.email;

  const queuePosition =
    filaClientes.items.findIndex((queueEmail) => queueEmail === email) + 1;

  if (!queuePosition) {
    return res.status(404).json({ error: "Email not found" });
  }

  return res.json({
    position: queuePosition,
    email,
    waitTime: `${queuePosition * 10} minutes`,
  });
});

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
