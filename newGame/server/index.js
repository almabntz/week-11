import express from 'express'
import cors from 'cors'
//import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extendednpm: true,
//   })
// )

//cors config
app.use(cors());

//end point for route
app.get('/', (request, response) => {
    response.json({ info: 'Hello! Node.js, Express, and Postgres API' })
  })




  app.listen(port, () => {
    console.log(`Hello! App running on port ${port}.`)
  })