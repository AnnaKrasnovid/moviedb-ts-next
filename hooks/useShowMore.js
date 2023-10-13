import { useEffect, useState } from "react";

export function useShowMore(list, number) {
    const [numberItem, setNumberItem] = useState(number);
    const [renderList, setRenderList] = useState([]);

    function showMoreItems() {
        // console.log(numberItem + number)
         setNumberItem(numberItem + number);
    }

    useEffect(() => {
        setRenderList(list.slice(0, numberItem));
    }, [numberItem])

    return {renderList, numberItem, showMoreItems}
}