const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const multer = require("multer");
const app = express();

app.use(bodyParser.json());
app.use(multer().any());


mongoose.connect("mongodb+srv://modassar123:modassar1234@test.ahxnnau.mongodb.net/group30Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
