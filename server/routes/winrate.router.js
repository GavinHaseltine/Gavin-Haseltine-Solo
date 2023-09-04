const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.isAuthenticated())
  
    
  
    console.log(req.body)
  
    let querytext = `SELECT "games_played", "games_won" FROM "player" WHERE "id" = 2;`
    pool.query(querytext)
    .then((response) => {
      res.send(response.rows)
    })
    .catch ((error) => {
      res.sendStatus(500)
    });
  } 
  );



module.exports = router;