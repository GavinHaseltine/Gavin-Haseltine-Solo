const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    console.log("login:", req.isAuthenticated())
    if (req.isAuthenticated()) {
    console.log("ahhhhh", req.params.id)
    pool.query(`UPDATE "all_decks"
    SET "deck_wins" = "deck_wins" + 0,
     "deck_plays" = "deck_plays" + 1
    WHERE "id" = $1;`, [req.params.id])
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