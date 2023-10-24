import { NameInt } from "@/settings/interfaces";

export function getInfo(arr: Array<NameInt>) {
    const infoArr: Array<string> = [];
    arr.map((i) => infoArr.push(i.name));
    return infoArr.join(', ');
};