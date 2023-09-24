import React from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { timerSlice } from '../../store/reducers/TimerSlice';

import styles from './Form.module.scss';

export const Form = () => {
    const dispatch = useAppDispatch();
    const { changeInterval } = timerSlice.actions;
    return (
        <label className={styles.label}>
            <pre>Введите n:  </pre>
            <input type='text' id='interval-input' className={styles.form} 
            onChange={evt => {dispatch(changeInterval(Number(evt.target.value)));}}
            /> 
        </label>
    );
};