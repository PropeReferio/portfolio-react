import React from "react";

class Widecard extends React.Component{
    render() {
        return (
            <div className="widecard">
                <imgwrapper>
                    <img src={this.props.img} className='projectimg' alt='Project'></img>
                </imgwrapper>
                <div class="compdet">
                    <h3><a href={this.props.url}>{this.props.title}</a></h3>
                    <h4 class="secondtext">{this.props.where}</h4>
                    <h4 class="secondtext">{this.props.from} {this.props.to}</h4>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Widecard;