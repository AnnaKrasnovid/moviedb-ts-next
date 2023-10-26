import { OptionInt } from "@/settings/interfaces";

const options: OptionInt = {
    hour12: false,
    year: 'numeric',
    month: 'long',
    day: "numeric",
}

// 1980-04-10T00:00:00.000Z
// 'Thu Jan 26 2017 11:00:00 GMT+1100'
// '04.10.1980'(месяц, число, год)
export function getDateFormat(date: string) {
    if (Date.parse(date)) {
        let dateParse = new Date(Date.parse(date));
        const RuDate = new Intl.DateTimeFormat('ru', options);
        return RuDate.format(dateParse); // 10 апреля 1980 г.    
    } else {
        return '';
    }
}
