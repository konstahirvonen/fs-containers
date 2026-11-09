const express = require('express');
const redis = require('../redis')
const router = express.Router();
const { get } = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get("/statistics", async (req, res) => {
  const todoCount = await get("todoCount") || 0

  res.json({
    added_todos: Number(todoCount)
  })
})

module.exports = router;
