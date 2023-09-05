const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.isAuthenticated())
  
    console.log(req.body)
  
    let querytext = `SELECT * FROM "all_decks";`
    pool.query(querytext)
    .then((response) => {
      res.send(response.rows)
    })
    .catch ((error) => {
      res.sendStatus(500)
    });
  } 
  );

  router.delete('/:id', (req, res) => {
    console.log("login:", req.isAuthenticated())
    if (req.isAuthenticated()) {
    console.log(req.params.id)
    pool.query(`DELETE FROM "all_decks" WHERE "id" = $1;`, [req.params.id])
      .then((result) => {
        res.sendStatus(200)
      }).catch((error) => {
        res.sendStatus(500)
      })
    }
    else {
      res.sendStatus(403)
    }
  });





module.exports = router;