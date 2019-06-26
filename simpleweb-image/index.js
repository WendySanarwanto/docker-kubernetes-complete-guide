const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('<p><h3>How are you doing ?</h3></p><p><h5>I am fine. Thank you.</h5></p>');
});

app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
});
