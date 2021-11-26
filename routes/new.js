const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('new', { message: 'form' });
});

module.exports = router;
