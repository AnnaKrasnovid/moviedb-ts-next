import { NameInt, OptionInt,ActorSimpleItemInt } from "../settings/interfaces";

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

export function getInfo(arr: Array<NameInt>) {
    const infoArr: Array<string> = [];
    arr.map((i) => infoArr.push(i.name));
    return infoArr.join(', ');
};

export function hideScroll(state: boolean): void {
    if (state === true) {
        document.body.classList.add('hide-scroll');
    } else {
        document.body.classList.remove('hide-scroll');
    }
};

export function getCurrentYear() {
    return new Date().getFullYear();
}

export function checkEmptyObject(obj: {}) {
    return Object.keys(obj).length === 0
}

export function getMoviesType(pathname: string) {
    if (pathname === '/serials') {
        return 'tv-series';
    } else if (pathname === '/cartoons') {
        return 'cartoon';
    } else {
        return 'movie';
    }
}

export function getString(item: Array<any>) {
    const array: Array<string> = [];
    item.map((i: any) => array.push(i.value));
    return array.join(' / ');
}

export function getError(movie: any, params: any, message: string) {
    if (movie.status) {
        if (movie.status < 200 || movie.status >= 300) {
            params = movie.status;
            message = `Ошибка: ${movie.status}, ${movie.message}`;
        }
    }
}

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

export function getActors(list: Array<ActorSimpleItemInt>) {
    if (list) {
      let actors: Array<string> = [];
      list.map((i: ActorSimpleItemInt) => i.profession === 'актеры' ? actors.push(i.name) : '');
      return actors.join(", ");
    }
  }
