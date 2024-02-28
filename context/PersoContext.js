import React, { createContext, useContext, useState } from 'react';

const PersoContext = createContext();

export const PersoProvider = ({ children }) => {
    const [inputList, setInputList] = useState([]);

    return (
        <PersoContext.Provider value={{ inputList, setInputList }}>
            {children}
        </PersoContext.Provider>
    );
};

export const usePersoContext = () => {
    const context = useContext(PersoContext);
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};