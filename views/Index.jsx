    const React = require("react")
    // const Nav = require("../components/Nav")
    class Index extends React.Component {
        render(){
        
        const {pokemon} = this.props
        return (
        
        <div> 
            {/* <Nav link="/pokemon/new" text="Create a Pokemon"/> */}
        <ul>
        {
            pokemon.map((pokemon ,i )=> {
            return (
                <li key={i}> 
                    <a href={`/pokemon/${pokemon._id}`}>{pokemon.name}</a>
                </li>
            );
        })  
        }
        </ul>
        </div>
        
        )
        }
    }
    module.exports =Index