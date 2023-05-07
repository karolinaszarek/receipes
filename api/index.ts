import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT,
    users = ["Ala", "Tomek", "Tosia"]

app.get('/', (req, res) => {
    res.send('Express Server');
});

app.get('/users', (req, res) => {
    res.json(users)
});

app.post("/user", (req, res) => {
    const user = req.body.user

    console.log('Adding user::::::::', user);
    users.push(user)
    res.send("User added")
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});