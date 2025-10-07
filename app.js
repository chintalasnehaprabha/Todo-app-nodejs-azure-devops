const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// In-memory task list
let todos = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  if (task) todos.push(task);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const index = req.body.index;
  todos.splice(index, 1);
  res.redirect('/');
});

// Start server
app.listen(port, () => console.log(`✅ ToDo app running on port ${port}`));
