import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/jobsbig.jpg';
import Social from '../Components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt='Profile Pic'></img>
                <ReactTypingEffect className='typingeffect' text={["I'm Bo\
 Stevens", "I'm a Software Developer"]} speed={100} 
                eraseDelay={700} />
                <div className='homesocial'>
                    <Social />
                </div>
            </div>
        )
    }
}

export default Home;