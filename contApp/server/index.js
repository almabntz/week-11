import express from 'express';
import cors from 'cors';
import pgPromise from "pg-promise";


const app = express();
const PORT = 6060;
const pgp = pgPromise({});
//promise statement that gets by DB from postico
const db = pgp ( 'postgres:http://localhost:5432/mycontacts');

app.use(cors());


// GET from mycontacts
app.get('/', async function (req, res, next) {

    try {
      const contacts = await db.any('SELECT * FROM contacts', [true]);
      res.send(contacts);
    } catch (e) {
        console.log(e);
      return res.status(400).json({ e });
    }
  });


//end point for route
app.get('/', (request, response) => {
    response.json({ info: 'Hello! back end is running!' })
});

//listening for port
app.listen(PORT, () => console.log(`back end is running on port ${PORT}`));