const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser('Thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies
    res.send(`hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'steive chicks');
    res.cookie('animal', 'godzilla')
    res.send('sent you a cookie!');
})

app.get('/getsignedcookies', (req, res) => {
    res.cookie('fruit', 'Mango', { signed: true })
    res.send('Ok signed your fruit cookie')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})



app.listen(3000, () => {
    console.log('Serving on port 3000!')
})