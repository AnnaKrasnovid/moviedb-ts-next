import { OptionInt } from "@/settings/interfaces";

const options: OptionInt = {
    hour12: false,
    year: 'numeric',
    month: 'long',
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
}

export function getDateFormat(date: string) {
    let dateParse = new Date(Date.parse(date));
    const RuDate = new Intl.DateTimeFormat('ru', options);
    return RuDate.format(dateParse);
}