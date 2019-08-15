import React from 'react';
import Avi from '../assets/avi.jpg';

export default function Info() {
    return (
        <div className='info'>
            <img src={Avi} alt='profile'/>
            <div className='desc'>
            <h4>CHIUKWUMEZIE STANLEY EGEMONYE</h4>
            <p>Upcoming Fullstack Developer and expert problem solver.</p>
            <p>Cellphone: +2348052094215</p>
            <p>Email: ukadikestanley@gmail.com</p>
            <p>Github: https://github.com/stukint</p>
            <p>LinkedIn: https://www.linkedin.com/in/stanley-ukadike-14a87656/</p>
            </div>
            <div className='project'>
            <h4>PROJECTS</h4>
            <p>React Clock: https://github.com/stukint/ReactClock</p>
            <p>Hey Alice: https://github.com/stukint/hey-alice-frontend</p>
            <p>Nesa Blog: https://github.com/stukint/nesaNodejs</p>
            </div>
        </div>
    )
}
