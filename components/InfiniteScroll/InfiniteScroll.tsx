import { useState, useEffect } from "react";

import Loader from "../../UI/Loader/Loader";

import { InfiniteScrollInt } from "../../settings/interfaces";

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
       
        setTimeout(() => {  
            callback();          
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