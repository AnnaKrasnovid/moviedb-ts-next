export function getQueryParams(genreValue: any, yearsValue: any, ratingValue: any) {
    const genre = genreValue ? `genres.name=${genreValue}` : ''
    const years = yearsValue ? `year=${yearsValue}` : 'year=2000-2023'
    const rating = ratingValue ? `rating.kp=${ratingValue}` : 'rating.kp=7-10'

    return { genre, years, rating }
}