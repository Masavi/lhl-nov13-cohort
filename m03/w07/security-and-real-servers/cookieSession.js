const express = require('express');
const cookieSession = require('cookie-session');
const app = express();

const cookieSessionConfig = cookieSession({
  name: 'myCookieSession',
  keys: ['my-secret-word'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
});

app.use(cookieSessionConfig);

// This is how we set a session cookie and set values to it
app.get('/', (req, res) => {
  req.session.message = "Hello, world! This is coming from the cookie session 🍪";

  res.status(200).send('Welcome to localhost:4000 :)');
})

// This is how we read and access the values in a cookie session
app.get('/test', (req, res) => {
  res.status(200).send('here is the req.session.message:' + req.session.message);
})

// This is how we delete the cookie session from the browser
app.get('/delete', (req, res) => {
  req.session = null;
  res.status(200).send('cookie deleted');
})

app.listen(4000, () => console.log('App listening on port 4000'));