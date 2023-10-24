import { useState, useEffect, useRef } from "react";

interface ToggleVisibilityInt {
    ref: any,
    isActive: boolean,
    openModal: () => void,
    closeModal: () => void,
}

export function useToggleVisibility(initiaLIsVisible: boolean): ToggleVisibilityInt {
    const ref = useRef<HTMLElement>(null);
    const [isActive, setIsActive] = useState(initiaLIsVisible);

    const openModal = () => setIsActive(true);
    const closeModal = () => setIsActive(false);

    const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            closeModal()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return { ref, isActive, openModal, closeModal }
}