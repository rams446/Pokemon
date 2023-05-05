    const React = require("react")
    // const Nav = require("../components/Nav")
    class New extends React.Component{
        render(){
            return(
                <div>
                    {/* <Nav link="/pokemon" text="Home" /> */}
                    <form action="/pokemon" method="POST">
                        Name: <input type='text' name='name'/> <br></br>
                        IMG: <input type='text' name='img'/> <br></br>
                        <input type ='submit' value='Create Pokemon' />
                    </form>
                </div>
            )
        }
    }

    module.exports = New