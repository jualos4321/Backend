class productmananger {
    static contadorDeProductos = 0
    constructor() {
        
        this.products = []
    }

    addProduct( title, description, price, thumbnail, code, stock) {
        productmananger.contadorDeProductos++ 
        const nuevoProducto = {
            title: title,
            description: description,
            price: price,
            thumbnail:thumbnail,
            code: code,
            stock: stock,
            id: productmananger.contadorDeProductos
            
        }
    }

    getProducts() {
        this.products.forEach(products => console.log(products))
    }

    getProductById (id) {
        this.products.find (products => products.id === id)
        if(id != id){
            console.log("not found")
        }else{
            console.log(this.products.id)
        }
    }
}


