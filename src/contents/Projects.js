import React from 'react';
import Widecard from '../Components/Widecard';
import skydivingpic from '../img/density-alt-screenshot.png';
import covidpic from '../img/dash-screenshot.png';
import rabbitmqpic from '../img/rabbitmq.png';
import roipic from '../img/roipic.png'

class Projects extends React.Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                <Widecard title="COVID-19 Dashboard with Heat Map" 
                url="https://covid-dash-bo.herokuapp.com/" where="CloudCafe Technologies"
                from="March 2019" to="- April 2019" img={covidpic}
                desc='This app tracks new confirmed cases of COVID-19, looks at
 percentage of total population infected, the flattening of the curve, and more.' />

                <Widecard title="Skydiving Safety App" 
                url="https://densityaltitude.herokuapp.com/" where="Coding Temple"
                to="January 2019" img={skydivingpic}
                desc='Reduces injuries and deaths in skydiving by providing a
difficult to find aviation metric that is much more time- and location-specific
than what is otherwise currently available.' />

                <Widecard title="RabbitMQ Messaging App"
                url="https://github.com/PropeReferio/pvsimulatorchallenge"
                to="March 2020" img={rabbitmqpic}
                desc='A little coding challenge that taught me more about sending
                messages through the back end. It was made to simulate readings
                of a solar panel, and how much power was produced.' />

                <Widecard title='Cash on Cash ROI Calculator'
                url="https://cashoncashroi.herokuapp.com/" to='August 2018'
                img={roipic}
                desc="As someone who's interested in investing in real estate,
                I decided to take a formula I learned about for calculating ROI
                and converting it into an calculator web app."
                />
            </div>
        )
    }
}

export default Projects;