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

export interface MovieSimpleInt {
    alternativeName: string | null,
    description: string | null,
    enProfession: string | null,
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

export interface MovieItemInt {
    ageRating: number | null,
    alternativeName: string,
    backdrop: { previewUrl: string | null, url: string | null },
    budget: {
        value: number,
        currency: string
    },
    countries: Array<{ name: string }>,
    deletedAt: any, // null
    description: string | null,
    distributors: {
        distributor: any,//null
        distributorRelease: any,// null

    }
    enName: string | null,
    externalId: {
        imdb: any,//null
        kpHD: any,//null
    },
    facts: Array<{ value: string }>,
    fees: {
        russia: any,
        usa: any,
        world: any,
    },
    genres: Array<{ name: string }>,
    id: number,
    images: { framesCount: number },
    imagesInfo: { framesCount: number }
    isSeries: boolean,
    lists: Array<any>,
    logo: {
        url: string | null,
    },
    movieLength: number | null,
    name: string,
    names: Array<{ name: string }>,
    persons: Array<ActorSimpleItemInt>,
    poster: {
        previewUrl: string | null,
        url: string | null,
    },
    premiere: any,
    productionCompanies: Array<any>,
    rating: {
        await: number,
        filmCritics: number,
        imdb: number,
        kp: number,
        russianFilmCritics: number,
    },
    ratingMpaa: number | null,
    releaseYears:
    { start: number, end: number }
    seasonsInfo: Array<any>,
    sequelsAndPrequels: Array<any>
    seriesLength: number | null,
    shortDescription: string | null,
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
    type: string,
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
    votes: {
        kp: number | null,
        imdb: number | null,
        filmCritics: number | null,
        russianFilmCritics: number | null,
        await: number | null
    },
    watchability: any,
    year: number


}


