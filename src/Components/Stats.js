import React from "react";
class Stats extends React.Component{
    constructor()
    {
        super();
        this.state = {
            name : "Navya kothur",
            count : 0,
        }
    }
    Updatethestate()
    {
        this.setState({
            name : "Jiyansh",
            count : this.state.count+1,
        })
        
    }
    render()
    {
        return(
            <>
             <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.count}</h2>
             </div>
             <button onClick={ () => this.Updatethestate()}>Update</button>
            </>
        )
    }
}
export default Stats;