import { useEffect, useState } from "react";

import { ShowMoreInt } from "@/settings/interfaces";

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