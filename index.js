import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import path from "path"
import ejsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/users.controller.js";

const server = express();
const productController = new ProductController();
const userController = new UserController();

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);
server.use(express.urlencoded({ extended: false }));

server.listen(3100, () => console.log("Server running on 3100"));

server.get("/", productController.getproducts);
server.get("/new", productController.getAddForm);
server.get("/update/:id", productController.viewUpdatePage);
server.get("/register", userController.viewRegisterPage)
server.get("/login", userController.viewLoginPage);




server.get("/delete/:id", productController.deleteProduct);
server.post("/", productController.addNewProduct);
server.post("/update", productController.postProductUpdate);
server.post("/register", userController.registerUser);
server.post("/login", userController.login)