export default class ProductModel {
    constructor(id, name, desc, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;

    }

    static get() {
        return products;
    }

    static add(name, desc, price, imageUrl) {
        let id = products.length + 1;
        let newProduct = new ProductModel(id, name, desc, price, imageUrl);
        products.push(newProduct);
    }

    static getById(id) {
        return products.find(product => product.id == id);
    }

    static update(productObj) {
        const index = products.findIndex((product) => { return product.id == productObj.id });

        products[index] = productObj;

    }

    static delete(id) {
        const deleteIndex = products.findIndex((product) => { return product.id == id });
        products.splice(deleteIndex, 1);

    }


}

let products = [
    new ProductModel(1, "Atomic Habits", "Book", 300, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvncwkKPc0GMXfVbYvsrTnYfZFqVMx_k23mRib_vrBi4G5t1SVM_9tV_7oMs-PcHFDY3w&usqp=CAU"),
    new ProductModel(2, "Ikagai", "Book", 400, "https://muskurado.com/wp-content/uploads/2023/03/Ikigai.jpg"),
    new ProductModel(3, "Deep Work", "Book", 500, "https://5.imimg.com/data5/SELLER/Default/2023/3/VN/TG/LW/147952517/new-product.jpeg"),


]