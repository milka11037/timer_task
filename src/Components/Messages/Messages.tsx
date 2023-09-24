import React from 'react';
import { useAppSelector } from '../../hooks/redux';

export function Messages() {
    const messages = useAppSelector(state => state.messageReducer.messages)
    return (
        <ul className="messages">
            {messages.map((message: string, id) => 
                <li className="message" key={id} >{message}</li>
            )}
        </ul>
        
    )
}