import React, {Component} from 'react'



export class HeaderBar extends Component{
    styles = {
        color:"white",
        margin: "70px"
    }
    render(){
        return(
            <div className="bg-primary col align-self-center">
                <span style={this.styles}><b>Finance House</b></span>
            </div>
        )
    }
}
