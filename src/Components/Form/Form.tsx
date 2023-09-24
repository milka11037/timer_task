import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { timerSlice } from '../../store/reducers/TimerSlice';

export function Form() {
    const dispatch = useAppDispatch();
    const { changeInterval } = timerSlice.actions
    return (
        <input type='text' id='interval-input'  
            onChange={evt => {dispatch(changeInterval(Number(evt.target.value)))}}
        />
        
    )
}