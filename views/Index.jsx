const React = require("react")
class Index extends React.Component {
    render(){
    const {pokemon} = this.props
    return (
    <div> 
    <ul>
    {
        pokemon.map(pokemon ,i => {
        return (
            <li key={i}>
                <a href={`/pokemon/${i}`}>{pokemon.name}</a>
            <br></br>
            {pokemon.color} 
            </li>

        )
    })  
    }
    </ul>
    </div>
    
    )
    }
}