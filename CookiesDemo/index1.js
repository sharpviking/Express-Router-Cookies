const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies
    res.send(`hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'steive chicks');
    res.cookie('animal', 'godzilla')
    res.send('sent you a cookie!');
})





app.listen(3000, () => {
    console.log('Serving on port 3000!')
})