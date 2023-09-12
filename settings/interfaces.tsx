export interface GenreItemInt {
    name: string,
}
export interface MovieInt {
    id: number,
    name: string,
    type: string,
    alternativeName: string,
    year: number,
    description: string,
    shortDescription: string,
    rating: {
        kp: number,
        imdb: number,
    },
    videos: {
        trailers: {
            url: string,
        }
    },
    persons: Array<
        {
            id: number,
            photo: Array<string>,
            profession: string,
            name: string,
        }
    >,
    movieLength: number,
    poster: {
        url: string,
    }
    countries: Array<{ name: string, }>
    genres: Array<{ name: string, }>
}

type ButtonTypes = 'button' | 'submit';
export interface ButtonInt {
    type?: ButtonTypes,
    callback: () => void
}

export interface ButtonTextInt extends ButtonInt {
    text?: string,
}

export interface SubmenuItemInt {
    id: string,
    path: string,
    title: string,
    value: string,
}

export interface MenuItemInt {
    id: string,
    path: string,
    title: string,
    submenu?: Array<SubmenuItemInt>
}
