import express from 'express'
import productManager from './producMananger'
const PORT = 8080

const app = express()

app.use(express.urlencoded({ extended: true }))
app.get('/', (req,res) =>{
   res.send("hola")
})
app.get('/product', async (req, res) => {
   const products = await productManager.getproducts()
   res.send(products)
   if(req.query.limit = 10){
    res.send(products)
   }else{
    res.send(products.slice(11, 100))
   }
})

app.get('/products/:id', async (req, res) => {
   res.send(req.params.id.find(req => req.id === id)) 
})

app.listen(PORT, () => {
    console.log(`Servidor express activo en puerto ${PORT}`)
})