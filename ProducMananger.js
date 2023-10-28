const fs = require('fs')

class productmananger {
    static contadorDeProductos = 0
    constructor() {
        this.path = './product.txt'
        this.currentId = 0
        this.products = []
    }

    async addProduct( title, description, price, thumbnail, code, stock,) {
        this.currentId = this.currentId + 1
        const nuevoProducto = {
            title: title,
            description: description,
            price: price,
            thumbnail:thumbnail,
            code: code,
            stock: stock,
            id: this.currentId
            
            
            
        }
        this.products = nuevoProducto
        JSON.stringify({nuevoProducto})
        await fs.promises.writeFileSync('./product.txt', 'utf-8')
    }

    async getProducts() {
        await fs.promises.readFileSync('./product.txt','utf-8')
        console.log (JSON.parse(this.products))
    }

async getProductById (id) {
    await fs.promises.readFileSync('./product.txt','utf-8')
        JSON.parse(this.products)
        this.products.find(products => products.id === id)
        console.log(this.products)
    }

    async updateProduct (id, newdata) {
        await fs.promises.readFileSync('./product.txt','utf-8')
        JSON.parse(this.products)
        this.products.findIndex(products => products.id === id)
        this.products = newdata
    }

    async deleteProduct (){
        await fs.promises.readFileSync('./product.txt','utf-8')
        JSON.parse(this.products)
        this.products.findIndex(products => products.id === id)
        this.products.slice (0,10)
    }
}
