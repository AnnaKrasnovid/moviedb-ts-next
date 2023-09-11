import { useState, useEffect } from "react";

import Loader from "../../UI/Loader/Loader";

import styles from './InfiniteScroll.module.scss';

function InfiniteScroll({ children, page, setPage, pages, callback }: any) {
    const [loading, setLoading] = useState(false);

    function handleScrollPage() {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight
            ) {
                return;
            }
            setLoading(true);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }

    function makeNewRequest() {
        if (!loading) { return };
        console.log(page , pages)
        if (page === pages) { setLoading(false); return }
        setTimeout(() => {
            setPage(page + 1);
            callback()
            setLoading(false);
        }, 500);
    }

    useEffect(() => {
        handleScrollPage()
    }, [])

    useEffect(() => {
        makeNewRequest()
    }, [loading]);

    return (
        <>
            {children}
            {loading && <Loader/>}
        </>
    )
}

export default InfiniteScroll;