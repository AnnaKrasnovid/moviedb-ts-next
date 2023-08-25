import { useState, useEffect } from 'react';

function getWidth() {
    const width = () => window.innerWidth;
    return width;
};

export function useWindowWidth() {    
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(getWidth());
    }, []);

    useEffect(() => {
        function handleChange() {            
            setWindowWidth(getWidth());
        }
        window.addEventListener('resize', handleChange);
        return () => window.removeEventListener('resize', handleChange);
    }, []);

    return windowWidth;
}