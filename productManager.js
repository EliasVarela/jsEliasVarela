class ProductManager{
    constructor(){
        this.products=[];
    }


getProducts = () => {

    return this.products;
}

addProduct = (title,description,price,thumbnail,code,stock)=>{
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products:[]
    }

    if(this.products.length ===0){
        product.id = 1
    } else {
        product.id = this.products [this.products.length -1].id+1
    }

    this.products.push(product)
}


getProductById = (idProduct) =>{
    const productIndex = this.products.findIndex(product =>product.id===idProduct);
    if (productIndex ===-1){
        console.log("Not Found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log("Se Agrego el Producto");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};

const productManager= new ProductManager ();
productManager.addProduct ("Pelota" ,"Cuero", 2500,"Sin imagen","arti001",98);
productManager.addProduct ("Guantes" ,"Tela", 1200,"Sin imagen","arti002",50);
productManager.addProduct ("Cono" ,"Plastico", 400,"Sin imagen","arti003",35);
productManager.addProduct ("Aro" ,"Metal", 3500,"Sin imagen","arti004",65);
productManager.addProduct ("´Pelota N°2" ,"Cuero", 1250,"Sin imagen","arti005",78);
productManager.addProduct ("Pelota Baloncesto" ,"Caucho", 3000,"Sin imagen","arti006",11);

productManager.getProductById(1);
productManager.getProductById(2);
productManager.getProductById(3);
productManager.getProductById(4);
productManager.getProductById(5);
productManager.getProductById(6);

console.log(productManager.getProducts());


