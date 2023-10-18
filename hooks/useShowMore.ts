import { useEffect, useState } from "react";

interface ShowMoreInt {
    renderList: Array<any>,
    numberItem: number,
    showMoreItems: () => void
}

export function useShowMore(list:Array<any>, number:number):ShowMoreInt {
    const [numberItem, setNumberItem] = useState<number>(number);
    const [renderList, setRenderList] = useState<Array<any>>([]);

    function showMoreItems() {
        setNumberItem(numberItem + number);
    }

    useEffect(() => {
        setRenderList(list.slice(0, numberItem));
    }, [numberItem])

    return { renderList, numberItem, showMoreItems }
}