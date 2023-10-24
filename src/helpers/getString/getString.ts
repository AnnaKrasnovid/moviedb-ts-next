export function getString(item: Array<any>) {
    const array: Array<string> = [];
    item.map((i: any) => array.push(i.value));
    return array.join(' / ');
}