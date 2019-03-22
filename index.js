//const express = require('express')
//const helmet = require('helmet')
// const knex = require('knex')
const db = require('./data/dbhelpers.js')
// const knexConfig = {
//   client: 'sqlite3',
//   connection: {
//     filename: './data/recipebookdb.sqlite3',
//   },
//   useNullAsDefault: true, // needed for sqlite
// };
//const db = knex(knexConfig)

// const server = express()

// server.use(helmet())
// server.use(express.json())

db.getDishes()
  .then(dishes => {
    console.log('dishes', dishes)
  }).catch(error => {
    console.log('there is an issue with dishes', error)
  })

// endpoints

// server.get('', (req, res) => {
//   res.send('server is alive')
// })

// const port = process.env.PORT || 7000;
// server.listen(port, () => console.log(`\nrunning on ${port}\n`))
