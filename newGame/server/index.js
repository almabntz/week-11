import express from 'express'
import cors from 'cors'
import pgPromise from 'pg-promise';
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const pgp = pgPromise({});

const db = pgp('postgres://localhost:5432/game');

//cors config
app.use(cors());

// //middleware
// app.use(bodyParser.json())
// // app.use(
// //   bodyParser.urlencoded({
// //     extendednpm: true,
// //   })
// // )


// GET from players
app.get('/players', async function (req, res, next) {

  try {
    const players = await db.any('SELECT * FROM players', [true]);
    res.send(players);
  } catch (e) {
    return res.status(400).json({ e });
  }
});




//end point for route
app.get('/', (request, response) => {
    response.json({ info: 'Hello! Node.js, Express, and Postgres API' })
  })
  app.listen(port, () => {
    console.log(`Hello! App running on port ${port}.`)
  })