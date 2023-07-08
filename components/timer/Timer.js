import { useEffect, useState } from 'react';
import styles from './style.module.css';

let interval;

const Timer = () => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        return () => {
            if (interval) {
                console.log('ASHUTOSH - ', interval)
                clearInterval(interval);
                interval = null;
            }
        }
    }, [])

    const getTime = (time) => {
        let numPs = Number(time);
        numPs++;

        if (numPs < 10) {
            return `0${numPs}`;
        } else if (numPs < 60) {
            return numPs.toString();
        } else {
            return '00';
        }
    }

    const changeHours = () => {
        setHours((ph) => {
            let numHours = Number(ph);
            numHours++;
            if (numPs < 10) {
                return `0${numPs}`;
            } else {
                return numHours.toString();
            }
        })
    }

    const changeMinutes = () => {
        setMinutes((pm) => {
            const currMins = getTime(pm);
            if (currMins === '00') {
                changeHours();
            }
            return currMins;
        })
    }

    const start = () => {
        if (interval) return;

        interval = setInterval(() => {
            setSeconds((ps) => {
                const currSeconds = getTime(ps);
                if (currSeconds === '00') {
                    changeMinutes();
                }
                return currSeconds;
            })
        }, 1000);
    }

    const stop = () => {
        if (interval) {
            clearInterval(interval);
        }
        setHours('00');
        setMinutes('00');
        setSeconds('00');
    }

    const pause = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }


    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div>{hours}</div>
                <div>:</div>
                <div>{minutes}</div>
                <div>:</div>
                <div>{seconds}</div>
            </div>
            <div className={styles.wrapper}>
                <button onClick={start} id='start'>Start</button>
                <button onClick={pause} id='pause'>Pause</button>
                <button onClick={stop} id='reset'>Reset</button>
            </div>
        </div>
    )
};

export default Timer;