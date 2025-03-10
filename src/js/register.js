const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { firstName, email, password } = req.body;

    if (!firstName || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const usersFile = "../json/users.json";

    fs.readFile(usersFile, (err, data) => {
        if (err) {
            console.error("Error reading users file:", err);
            return res.status(500).json({ error: "Error reading users file" });
        }

        let users = [];
        try {
            users = JSON.parse(data);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            return res.status(500).json({ error: "Error parsing users file" });
        }

        const newUser = {
            id: users.length + 1,
            firstName,
            email,
            password,
        };

        users.push(newUser);

        fs.writeFile(usersFile, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Error saving user" });
            }

            res.status(201).json({ message: "User registered successfully", redirectTo: "/login" });
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});