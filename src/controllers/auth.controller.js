import { findUserByEmail } from "../models/users.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { envs } from "../../config/envs.js";
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
    if (!user) {
        return res.status(404).json({ message: "el usuario o la password son incorrectas" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(404).json({ message: "no autorizado" });
    }
    const token = jwt.sign({ email }, envs.JWT_SECRET, {
        expiresIn: "1h",
    });
    const { password: _, ...userWithoutPassword } = user;
        res.status(200).json({ token, userWithoutPassword });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { loginUser };