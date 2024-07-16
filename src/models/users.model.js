export default class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add(name, email, password) {
        const id = users.length + 1;
        users.push(new UserModel(id, name, email, password));

    }

    static isValidUser(email, password) {
        return users.find((user) => { return user.email == email && user.password == password });
    }
}

let users = [];