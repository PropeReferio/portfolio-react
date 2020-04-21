import React from "react";

class About extends React.Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Bo Stevens</h1>
                <h3>Full Stack Developer</h3>
                <br></br>
                <p>Hi! I'm a software developer who's primarily interested in
                back-end development, but also enjoys full-stack. I mostly prefer 
                <strong> Python</strong>, and I've built web apps with it using 
                <strong> Flask</strong> and <strong>Dash</strong>.</p>
                <p>When I'm not working, I LOVE playing harmonica, jumping out
                of planes, doing acro yoga, and getting to know the wonderful
                culture of Austin, TX (I moved here in March 2020)!
                </p>
                
            </div>
        );
    }
}

export default About;