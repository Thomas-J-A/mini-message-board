const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'I spotted a squirrel in my kitchen this morning - should I tell my husband?',
    username: 'WorriedMrsAnderson',
    added: new Date(),
  },
  {
    text: 'I don\'t, I think it\'s a ruse by the US government',
    username: 'Anon22',
    added: new Date(),
  },
  {
    text: 'Do you believe in UFOs?',
    username: 'Big_Charlie',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  // Push new message to array
  const text = req.body.text;
  const username = req.body.username;

  messages.unshift({
    text,
    username,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
