const express = require("express")
const app= express()
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/Pokemon');

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


// Show 

app.get('/pokemon/:id' , (req , res) => {
    res.render('Show',{pokemon : pokemon[req.params.id]})
});














// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });