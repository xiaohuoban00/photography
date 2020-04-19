const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.listen(10086, () => {
    console.log('App listening at port 10086')
});