import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div className='about'>
            <h2>About</h2>
            <p>This is omdbAPI movies app.</p>
            <p>
                I create this website for learn redux toolkit
                <li>store → keep movies api</li>
                <li>reducer → update movies</li>
                <li>dispatch → update movies to store</li>
            </p>
        </div>
    )
}

export default About