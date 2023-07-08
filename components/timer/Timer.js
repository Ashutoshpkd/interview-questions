import { useEffect, useState } from 'react';
import styles from './style.module.css';
const BTN_STATUS = {
    ACTIVE: 'active',
    PAUSED: 'paused',
}

let interval;

const Timer = () => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [btnStatus, setBtnStatus] = useState(BTN_STATUS.PAUSED)

    useEffect(() => {
        return () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }
    }, []);

    const formatHours = (ph, shouldInc) => {
        let numHours = Number(ph);
        if (shouldInc) numHours++;
        if (numHours < 10) {
            return `0${numHours}`;
        } else {
            return numHours.toString();
        }
    }

    const getTime = (time, shouldInc) => {
        let numPs = Number(time);
        if (shouldInc) numPs++;

        if (numPs < 10) {
            return `0${numPs}`;
        } else if (numPs < 60) {
            return numPs.toString();
        } else {
            return '00';
        }
    }

    const changeHours = () => {
        setHours(ph => formatHours(ph, true));
    }

    const changeMinutes = () => {
        setMinutes((pm) => {
            const currMins = getTime(pm, true);
            if (currMins === '00') {
                changeHours();
            }
            return currMins;
        })
    }

    const start = () => {
        if (interval) return;

        setBtnStatus(BTN_STATUS.ACTIVE);
        interval = setInterval(() => {
            setSeconds((ps) => {
                const currSeconds = getTime(ps, true);
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
        setBtnStatus(BTN_STATUS.PAUSED)
        setHours('00');
        setMinutes('00');
        setSeconds('00');
    }

    const pause = () => {
        if (interval) {
            setBtnStatus(BTN_STATUS.PAUSED)
            clearInterval(interval);
            interval = null;
        }
    }

    const setInputHours = (e) => {
        let hrs = e.target.value;
        hrs = formatHours(hrs, false);
        setHours(hrs);
    }

    const setInputMinutes = (e) => {
        let mins = e.target.value;
        mins = getTime(mins, false);
        setMinutes(mins);
    }

    const setInputSeconds = (e) => {
        let sec = e.target.value;
        sec = getTime(sec, false);
        setSeconds(sec);
    }

    const isActive = btnStatus === BTN_STATUS.ACTIVE;
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <input onChange={setInputHours} placeholder='00' value={hours} type='text' className={styles.time}/>
                <div className={styles.dot}>:</div>
                <input onChange={setInputMinutes} placeholder='00' value={minutes} type='text' className={styles.time}/>
                <div className={styles.dot}>:</div>
                <input onChange={setInputSeconds} placeholder='00' value={seconds} type='text' className={styles.time}/>
            </div>
            <div className={styles.wrapperBtn}>
                <button onClick={() => {isActive ? pause() : start()}} className={!isActive ? styles.start : styles.pause}>
                    {isActive ? 'PAUSE' : 'START'}
                </button>
                <button onClick={stop} className={styles.reset}>RESET</button>
            </div>
        </div>
    )
};

export default Timer;