export interface GenreItemInt {
    name: string,
}
export interface MovieInt {
    id: number
    type: string,
    name: string,
    rating: {
        kp: number,
        imdb: number,
        [propName: string]: string | number,
    },
    [propName: string]: string | number | {},
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
