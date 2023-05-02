require("dotenv").config();
const express = require("express")
const app= express()
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/Pokemon');
const {connect , connection} = require('mongoose');

//Database Connection

connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.once('open', () => {
    console.log('connected to mongo');
  });


//MiddleWare

const reactViewEngine = require("jsx-view-engine").createEngine();
app.engine('jsx', reactViewEngine)
app.set('view engine', 'jsx');
app.set('views', './views')

// Custom Middleware 
app.use(express.urlencoded({extended : false}));
// INDEX
app.get('/pokemon',(req,res) =>{
    res.render('Index', {pokemon})
    });
//New
app.get('/pokemon/new',(req, res) => {
    res.render('New')
})

app.post('/pokemon',(req, res) => {
  pokemon.push(req.body)
  res.redirect('/pokemon')
});

// Show 

app.get('/pokemon/:id' , (req , res) => {
    res.render('Show',{pokemon : pokemon[req.params.id]})
});














// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });