const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createNewUser(req, res) {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        username: username,
        email: email,
        password: hashedPassword
    });

    return res.render("login");
}

module.exports = { createNewUser };
