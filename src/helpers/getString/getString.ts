export function getString(item: Array<any>) {
    const array: Array<string> = [];
    
    item.map((i: any) => {
        if(i.value!=='') {
            array.push(i.value)
        }
    });
    return array.join(' / ');
}