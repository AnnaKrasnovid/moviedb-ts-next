import { useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

import Loader from "../../UI/Loader/Loader";

import styles from './InfiniteScroll.module.scss';

interface InfiniteScrollInt {
    children: ReactNode,
    callback: () => void,
    condition: boolean, // условие при котором не будет вызываться функция
}

function InfiniteScroll({ children, condition, callback }: InfiniteScrollInt) {
    const [loading, setLoading] = useState(false);

    function handleScrollPage() {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
                return;
            }
            setLoading(true);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }

    function makeNewRequest() {
        if (!loading) { return };
        if (condition) {
            setLoading(false);
            return
        };
        callback();
        setTimeout(() => {            
            setLoading(false);
        }, 500);
    }

    useEffect(() => {
        handleScrollPage();
    }, [])

    useEffect(() => {
        makeNewRequest();
    }, [loading]);

    return (
        <>
            {children}
            {loading && <Loader />}
        </>
    )
}

export default InfiniteScroll;