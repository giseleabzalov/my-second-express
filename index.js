import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());


const people = ['Danny','Joe'];

app.get('/', (req, res) => {
    res.send("Hi there! Welcome");
});

app.get('/people', (req, res) => {
    res.send(people);
});

app.post('/newPeople', (req, res) => {
    const newPerson = req.body;
    res.send(`the new person is ${newPerson}`)
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on localhost port: ${process.env.PORT}`)
})