export function getRoundNumber(number: number) {
    return Math.round(number * 10) / 10;
};

export function getTime(number: number): string {
    const minutes = number % 60;
    const hours = (number - minutes) / 60;
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes

    if (hours <= 0) {
        return `${formatMinutes} мин.`;
    } else {
        return `${hours}ч. ${formatMinutes} мин.`;
    }
}

export function getInfo(arr: Array<any>) {
    const infoArr: Array<string> = [];
    arr.map((i) => infoArr.push(i.name));
    return infoArr.join(', ');
};

export const hideScroll = (state: boolean): void => {
    if (state === true) {
        document.body.classList.add('hide-scroll');
    } else {
        document.body.classList.remove('hide-scroll');
    }
};

export const getCurrentYear = () => {
    return new Date().getFullYear();
}

export function checkEmptyObject(obj: {}) {
    return Object.keys(obj).length === 0
}

export  function getMoviesType(pathname:string) {
    if (pathname === '/serials') {
        return 'tv-series';
    } else if (pathname === '/cartoons') {
        return 'cartoon';
    } else {
        return 'movie';
    }
}

export function getString (item: Array<any>) {
    const array: Array<string> = [];
    item.map((i: any) => array.push(i.value));
    return array.join(' / ');
}    

