import { useEffect, useState } from "react";

export function useInfiniteScroll(callback: any, condition:any) {
    const [isFetching, setIsFetching] = useState<boolean>(false);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        if (condition) return;

        setTimeout(() => {
            callback();
            setIsFetching(false);
        }, 300)
       
    }, [isFetching]);

    return [isFetching, setIsFetching];
}