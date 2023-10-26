export function getQueryParams(genreValue: string | string[] | undefined, yearsValue: string | string[] | undefined, ratingValue: string | string[] | undefined) {
    const genre = genreValue ? `genres.name=${genreValue}` : ''
    const years = yearsValue ? `year=${yearsValue}` : 'year=2000-2023'
    const rating = ratingValue ? `rating.kp=${ratingValue}` : 'rating.kp=7-10'

    return { genre, years, rating }
}