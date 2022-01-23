const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
app.use(morgan('dev'));

app.use(bodyParser.json({limit:1024*1024*10, type:'application/json'}));
var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*10,type:'application/x-www-form-urlencoded' });
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(cors());
app.options('*', cors());
app.use('/', router);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = 3800;

mongoose
    .connect(`mongodb://localhost:27017/meeting-buddy`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => {
        app.listen(3800, () => {
            console.log(`Server running at 3800`);
        });
    })
    .catch((err) => {
        console.log(err);
    });