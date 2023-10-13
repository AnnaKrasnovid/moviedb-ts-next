import { useEffect, useMemo, useState } from "react";

export function useInfiniteScroll(targetRef:any) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [options, setOptions] = useState({})

    const callback = (entries: any) => {
        const res = entries[0];
        setIsVisible(res.isIntersecting);
    };

    useEffect(() => {
        setOptions({
            root: targetRef.current,
            rootMargin: "0px",
            threshold: 0.1,
        })
    }, [targetRef])

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const currentTarget = targetRef.current;

        if (currentTarget) {
            observer.observe(targetRef.current)
        }

        return () => {
            if (currentTarget) { observer.unobserve(targetRef.current) }
        }

    }, [targetRef,options])

    return { isVisible };
}