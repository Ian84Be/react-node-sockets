import React, {useEffect, useState } from 'react';
import socketIoClient from 'socket.io-client';
const AppContext = React.createContext({});

const AppProvider = props => {
    const api_url = 'http://localhost:5000';
    const now = new Date();
    const defaultState = {
        time: now
    }

    const [state, setState] = useState(defaultState);

    useEffect(() => {
        const socket = socketIoClient(api_url);
        socket.on('FromAPI', (data) => {
            setState(prevState => ({
                ...prevState,
                time: data
            }));
        })

        return () => socket.disconnect();
    }, [setState]);

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };