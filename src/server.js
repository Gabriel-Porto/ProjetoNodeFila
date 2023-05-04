const express = require("express")
const app = express()
const PORT = 3333

app.get("/", (req, res) => {
    
})

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
