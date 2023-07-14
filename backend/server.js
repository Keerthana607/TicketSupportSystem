var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var Users = require('./routes/Users')
var Tickets = require('./routes/Tickets')

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use('/public', express.static('public'));

const mongoURI = 'mongodb+srv://keerthana:1234@cluster0.2l6fd9h.mongodb.net/'  //Database 

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


  app.use(bodyParser.urlencoded({ extended: false })) 
  app.use(bodyParser.json()) 


app.use('/users', Users)
app.use('/tickets', Tickets)
app.get('/tickets',function(req,res){
  res.send("Hii")

});
var server=app.listen(port, function() {
  var host=server.address().address;
  console.log('Server is running on port: ' + host,port)
  console.log(process.env.MONGOCONNECTION);
})
