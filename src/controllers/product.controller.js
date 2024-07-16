import ProductModel from "../models/product.model.js";
import path from "path"

export default class ProductController {

    getproducts(req, res) {
        const products = ProductModel.get();
        res.render("products", { products })
        // res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
    }

    getAddForm(req, res) {
        res.render("newproduct");
    }

    addNewProduct(req, res) {
        const { name, desc, price, imageUrl } = req.body;
        console.log(req.body)
        ProductModel.add(name, desc, price, imageUrl);
        let products = ProductModel.get();
        res.render("products", { products });

    }

    viewUpdatePage(req, res) {
        const id = req.params.id;
        console.log(id);
        const productFound = ProductModel.getById(id);

        if (!productFound) {
            res.send("Product not found")
        }
        else {
            res.render("update-product", { product: productFound })
        }
    }

    postProductUpdate(req, res) {
        const productObj = req.body;
        ProductModel.update(productObj);
        let products = ProductModel.get();
        res.render("products", { products })
    }

    deleteProduct(req, res) {
        const id = req.params.id;
        const productFound = ProductModel.getById(id);


        if (!productFound) {
            res.send("product not found")
        }
        else {
            ProductModel.delete(id);
            let products = ProductModel.get()
            res.render("products", { products })
        }
    }

}