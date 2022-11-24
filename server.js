const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>What's your name?</h2>
        </section>
          <div class="form-control">
            <label>Input your name</label>
            <input type="text" name="goal">
          </div>
          <button>Press to input</button>
        </form>
        <section>
          <h2>Hello</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

app.listen(80);
