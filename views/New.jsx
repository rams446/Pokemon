const React = require("react")

class New extends React.Component{
    render(){
        return(
            <div>
                <form action="/pokemon" method="post">
                    Name: <input type='text' name='name'/> <br></br>
                    <input type ='submit' value='Create Pokemon' />
                </form>
            </div>
        )
    }
}

module.exports = New