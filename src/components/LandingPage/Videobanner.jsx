import React from 'react';
import './VideoBanner.css';

function VideoBanner() {
    return (
        <div className="videoBanner">
            <div className="videoBanner__info">
                <h1>Hire the best freelancers for any job, online.</h1>
                <h4>
                    Millions of people use freelancer.com to turn their ideas into reality.
                </h4>
                <div className='flex flex-row gap-4 px-4 font-poppins'>
                <button className="videoBanner__info--first px-4">
                    Hire a Freelancer
                </button>
                <button className="videoBanner__info--second px-4">
                    Earn Money Freelancing
                </button>
                </div>
            </div>

        </div>
    )
}

export default VideoBanner;

