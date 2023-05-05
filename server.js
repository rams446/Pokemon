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

    // // Seed Route
    app.get('pokemon/seed', async (req, res) => {
        try {
        await pokemon.create ( [
            {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
            {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
            {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
            {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
            {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
            {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
            {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
            ]);
        res.redirect('/pokemon');
        } catch (err) {
        res.status(400).send(err);
        }
    });
    // INDEX
    app.get('/pokemon', async (req,res) =>{
        try {
        const foundPokemon = await pokemon.find({})
        res.status(200).render('Index', {pokemon : foundPokemon})
        } catch(err){
            res.status(400).send(err);
        } 
        });
    //New
    app.get('/pokemon/new',(req, res) => {
        res.render('New')
    })
    //Create
    app.post('/pokemon',async (req, res) => {
        try {
        const createpokemon=  await pokemon.create(req.body)
            res.redirect('/pokemon')

        } catch(err){
        res.status(400).send(err);
        }
    
    });

    // Show 

    app.get('/pokemon/:id' , async (req , res) => {
        try{
        const foundPokemon = await pokemon.findById(req.params.id)
        res.render('Show',{pokemon : foundPokemon})
        } catch(err){
            res.status(400).send(err);
        }
    });

    // Listen
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });