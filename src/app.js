const express = require('express');

const PORT = 8080

const app = express()
app.use(express.urlencoded({ extended: true }))
app.get('/product', async (req, res) => {
   await getproducts()
   res.send(getproducts())
   if(req.query.limit = 10){
    res.send(getproducts())
   }else{
    res.send(getproducts().slice(11, 100))
   }
})

app.get('/product/:id', async (req, res) => {
   res.send(req.params.id.find(req => req.id === id)) 
})

app.listen(PORT, () => {
    console.log(`Servidor express activo en puerto ${PORT}`)
})