const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const  mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const ProductsRoute = require("./app/routes/product.route")
const router = express.Router();
const port = 5005;
const cors = require("cors")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then( () => {
    console.log("successfully connected to the db");
}).catch( err => {
    console.log("could not connect to DB")
    process.exit();
})
app.get('/',(req,res) =>{
    res.json({"mesaage":"welcome to NOde APIs"});
})
require('./app/routes/user.route.js')(app);
app.use("/products",ProductsRoute);
app.listen(port, function(){
    console.log("Server is listening at port : " + port);
});
