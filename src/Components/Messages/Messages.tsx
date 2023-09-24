import React from 'react';

import { useAppSelector } from '../../hooks/redux';

import styles from './Messages.module.scss';

export const Messages = () => {
    const messages = useAppSelector(state => state.messageReducer.messages);
    return (
        <ul className={styles.messages}>
            {messages.map((message: string) => 
                <li className={styles.message} key={String(Math.random())} >{message}</li>
            )}
        </ul>
        
    );
};