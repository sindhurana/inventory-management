import ProductModel from "../models/product.model.js";
import UserModel from "../models/users.model.js";

export default class UserController {

    viewRegisterPage(req, res) {
        res.render("register");
    }

    viewLoginPage(req, res) {
        res.render("login");
    }

    registerUser(req, res) {
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.render("login")
    }

    login(req, res) {
        const { email, password } = req.body;
        const userFound = UserModel.isValidUser(email, password);

        if (!userFound) {
            res.send("user not found");
        }
        else {
            let products = ProductModel.get();
            res.render("products", { products });
        }
    }
}