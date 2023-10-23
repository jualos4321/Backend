import fs from 'fs'

class productmananger {
    static contadorDeProductos = 0
    constructor() {
        this.path = path
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
        this.products = n
        JSON.stringify({nuevoProducto})
        await fs.promises.writeFile(this.products)
    }

    async getProducts() {
        await fs.promises.readFile(this.addProduct)
        console.log (JSON.parse(this.products))
    }

async getProductById (id) {
        await fs.promises.readFile(this.addProduct)
        JSON.parse(this.products)
        this.products.find(products => products.id === id)
        console.log(this.products)
    }

    async updateProduct (id, newdata) {
        await fs.promises.readFile(this.addProduct)
        JSON.parse(this.products)
        this.products.findIndex(products => products.id === id)
        this.products = newdata
    }

    async deleteProduct (){
        await fs.promises.readFile(this.addProduct)
        JSON.parse(this.products)
        this.products.findIndex(products => products.id === id)
        this.products.slice (0,10)
    }
}
