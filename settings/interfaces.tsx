export interface GenreItemInt {
    name: string,
}

type ButtonTypes = 'button' | 'submit';
export interface ButtonInt {
    type?: ButtonTypes,
    callback: () => void,
    className?: string,
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

export interface ValueInt {
    value: string,
}

export interface NameInt {
    name: string,
}

export interface MovieBaseInt {
    alternativeName: string | null,
    countries: Array<{ name: string }>,
    description: string | null,
    enName: string | null,
    externalId: {
        imdb: string | any,//null
        kpHD: string | any,//null
    },
    genres: Array<{ name: string }>,
    id: number,
    logo?: {
        url: string | null,
    },
    movieLength: number | null,
    name: string,
    names: Array<{ name: string }>,
    poster: {
        previewUrl: string | null,
        url: string | null,
    },
    rating: {
        await: number,
        filmCritics: number,
        imdb: number,
        kp: number,
        russianFilmCritics: number,
    },
    shortDescription: string | null,
    type: string,
    votes: {
        kp: number | null,
        imdb: number | null,
        filmCritics: number | null,
        russianFilmCritics: number | null,
        await: number | null
    },
    watchability: any,
    year: number,
    releaseYears?:
    { start: number, end: number }
}

export interface MovieSimpleInt {
    alternativeName?: string | null,
    description: string | null,
    enProfession?: string | null,
    general: boolean,
    id: number,
    name: string | null,
    rating: number | null
}

export interface MovieSemilarItemInt {
    alternativeName: string | null,
    enName: string | null,
    id: number,
    name: string | null,
    poster: {
        previewUrl: string | null,
        url: string | null,
    },
    type: string
}

export interface SpousesInt {
    id: number,
    name: string | null,
    divorced: boolean,
    divorcedReason: string,
    sex: string,
    children: number,
    relation: string
}

export interface ActorItemInt {
    age: number,
    birthPlace: Array<ValueInt>,
    birthday: string,
    countAwards: number | null,
    death: string | null,
    deathPlace: string | null,
    enName: string | null,
    facts: Array<ValueInt> | null,
    growth: number | null,
    id: number,
    isParse: boolean,
    movies: Array<MovieSimpleInt>
    name: string,
    photo: string | null,
    profession: Array<ValueInt>,
    sex: number,
    spouses: Array<SpousesInt> | null,
    updatedAt: string,
}

export interface ActorSimpleItemInt {
    description: string,
    enName: string | null,
    enProfession: string | null,
    id: number,
    name: string,
    photo: string,
    profession: string | null,
}
export interface ActorsListInt {
    list: Array<ActorSimpleItemInt>,
}
export interface ActorInt {
    actor: ActorItemInt
}

export interface FactsInt {
    list: Array<ValueInt>
}

export interface MovieItemInt extends MovieBaseInt {
    ageRating: number | null,
    backdrop: { previewUrl: string | null, url: string | null },
    budget: {
        value: number,
        currency: string
    },
    deletedAt: any, // null
    distributors: {
        distributor: any,//null
        distributorRelease: any,// null
    }
    facts: Array<{ value: string }>,
    fees: {
        russia: any,
        usa: any,
        world: any,
    },
    images: { framesCount: number },
    imagesInfo: { framesCount: number }
    isSeries: boolean,
    lists: Array<any>,
    persons: Array<ActorSimpleItemInt>,
    premiere: any,
    productionCompanies: Array<any>,
    ratingMpaa: number | null,
    seasonsInfo: Array<any>,
    sequelsAndPrequels: Array<any>
    seriesLength: number | null,
    similarMovies: Array<MovieSemilarItemInt>,
    slogan: string,
    spokenLanguages: {
        name: string | null,
        nameEn: string | null
    },
    status: string,
    technology: { hasImax: boolean, has3D: boolean },
    ticketsOnSale: boolean,
    top10: number | null,
    top250: number | null,
    totalSeriesLength: number | null,
    typeNumber: number,
    updateDates: Array<string>,
    updatedAt: string,
    videos: {
        trailers: Array<{
            name: string | null,
            site: string | null,
            type: string | null,
            url: string | null,
        }>,
        teasers: Array<any>
    },
}

export interface MovieCardSimpleInt {
    item: MovieSemilarItemInt
}

export interface MovieCardInt {
    movie: MovieItemInt
}

export interface SimilarMovieCardInt {
    alternativeName: string,
    enName: string | null,
    id: number,
    name: string,
    poster: {
        previewUrl: string,
        url: string
    },
    type: string
}

export interface SimilarMoviesInt {
    list: Array<SimilarMovieCardInt>
}

export interface MoviesInfoInt {
    docs: Array<MovieBaseInt>,
    limit: number,
    page: number,
    pages: number,
    total: number,
}

export interface MoviesPageInt {
    movies: MoviesInfoInt,
}

export interface MainPageInt {
    movieRating: MoviesInfoInt,
    cartoons: MoviesInfoInt,
    series: MoviesInfoInt,
    movieRandom: MovieItemInt
}

