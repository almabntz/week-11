import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';
import bodyparser from "body-parser";

const app = express();
const PORT = 6060;
const pgp = pgPromise({});
//promise statement that gets by DB from postico
const db = pgp('postgres://localhost:5432/mycontacts');

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
//end point for route
app.get('/', (request, response) => {
  response.json({ info: 'Hello! back end is running!' })
});


// GET from mycontacts
app.get('/contacts', async function (req, res, next) {

    try {
      const contacts = await db.any('SELECT * FROM contacts', [true]);
      res.send(contacts);
    } catch (e) {
        console.log(e);
      return res.status(400).json({ e });
    }
  });

//POST for contacts 
app.post("/contacts", async (req, res) => {
  const contact = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  };
  console.log(contact);
  try {
    const createdContact = await db.one(
      "INSERT INTO contacts(name, email, number) VALUES($1, $2, $3) RETURNING *",
      [contact.name, contact.email, contact.number]
    );
    console.log(createdContact);
    res.send(createdContact);
  } catch (e) {
    return res.status(400).json({ e })
  }
});



//listening for port
app.listen(PORT, () => console.log(`back end is running on port ${PORT}`));


