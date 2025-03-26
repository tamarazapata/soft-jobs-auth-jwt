import bcrypt from 'bcryptjs';
import { createUser } from "../models/users.models.js";
import { findError } from "../utils/utils.js";

const registerUser = async (req, res) => {
    try {
        const { email, password, rol, lenguaje } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await createUser(email, hashedPassword, rol, lenguaje);

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message, type: errorFound[0].type });
    }
};

export { registerUser };