import React, {useRef,useState, useEffect} from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({cdHrs}) {
    const[hours, setHours] = useState(cdHrs);
    const[minutes, setMinutes] = useState(59);
    const[seconds, setSeconds] = useState(59);
    const startTimer = () => {
        // interval = setInterval (() => {
            if(hours >= 0) {
                if(minutes > 0) {
                    if(seconds > 0){
                        setTimeout(()=> setSeconds(seconds - 1), 1000);
                    }else {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    }
                }else {
                    setSeconds(59);
                    setMinutes(59);
                    setHours(hours - 1);
                }
                if( hours === 0) {
                    setHours(cdHrs);
                }
            }

        // },1000)

    }

    useEffect(() => {
        startTimer();
    })


    return(
        <div className='countdown d-flex justify-content-center'>
            <div className='countdown-container hours'>
	            <span className='countdown-heading hours-top'>Hours</span>
	            <span className='countdown-value hours-bottom'>{hours}</span>
            </div>
            <div className='countdown-container minutes'>
            	<span className='countdown-heading minutes-top'>Minutes</span>
            	<span className='countdown-value minutes-bottom'>{minutes}</span>
            </div>
            <div className='countdown-container seconds'>
            	<span className='countdown-heading seconds-top'>Seconds</span>
            	<span className='countdown-value seconds-bottom'>{seconds}</span>
            </div>
        
        
        
        </div>
    );


}

export default Timer;