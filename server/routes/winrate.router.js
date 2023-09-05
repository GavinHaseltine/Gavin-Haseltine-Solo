const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.isAuthenticated())
  
    
  
    console.log(req.body)
  
    let querytext = `SELECT * FROM "player";`
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
    pool.query(`DELETE FROM "player" WHERE "id" = $1;`, [req.params.id])
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



  router.post('/', (req, res) => {
    console.log("login:", req.isAuthenticated())
  
    if (req.isAuthenticated()) {
    console.log('req body:', req.body)
  
    let queryText = `INSERT INTO "player"("player_name")
    VALUES($1);`
    let queryParams = [req.body.player_name];
    pool.query(queryText, queryParams)
      .then((result) => {
        res.sendStatus(201)
      }).catch((error) => {
        res.sendStatus(500)
      })
    } else {
      res.sendStatus(403);
    }
    
    });


module.exports = router;