import React, { ReducerAction, useEffect, useState } from 'react';
import './Timer.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { timerSlice } from '../../store/reducers/TimerSlice';
import styles from './Timer.module.scss';

export function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [once, setOnce] = useState(false);

    const interval = useAppSelector(state => state.messageReducer.interval);

    const minutesString  = String(Math.floor(seconds / 60)).padStart(2, '0')
    const hoursString = String(Math.floor(seconds / 360)).padStart(2, '0')
    const secondsString = String(seconds % 60).padStart(2,'0')

    const dispatch = useAppDispatch();
    const { addMessage } = timerSlice.actions

    useEffect(() => {
        let timer = setInterval(() => {
            if (timerOn) {
                setSeconds(prevState => prevState += 1)
                setOnce(false)
            }
        }, 1000)

        if (seconds % interval === 0 && seconds !== 0 && once === false) {
            dispatch(addMessage('Тестовое сообщение'));
            setOnce(true);
        }
        
        return () => {
            clearInterval(timer);
        }
    }, [seconds, timerOn])

    const onToggle = () => {
        setTimerOn(!timerOn)
    }

    return(
        <React.Fragment>
            <div className={styles.timer}>
                {hoursString}:{minutesString}:{secondsString}
            </div>
            <button type='button' className={styles.toggle} onClick={onToggle}>
                {timerOn ? 'Остановить' : 'Запустить'}
            </button>
        </React.Fragment>
    )
}