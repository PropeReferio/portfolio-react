import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            'myskills':['Python', 'Flask', 'Pandas', 'Numpy', 'Dash', 'Javascript',
        'Angular', 'ReactJS', 'Docker', 'Kubernetes', 'SQL', 'HTML', 'CSS']
        };
    }
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=> {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills;