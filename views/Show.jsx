    const React = require("react")
    class Show extends React.Component {
        render(){
            const pokemon = this.props.pokemon
        
        return(
        <div>
        
            The {pokemon.name} <br>
            </br>
            {pokemon.img}
        </div>
        )
        }
    }

    module.exports = Show