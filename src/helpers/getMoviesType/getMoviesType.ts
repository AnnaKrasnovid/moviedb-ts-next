export function getMoviesType(pathname: string) {
    if (pathname === '/serials') {
        return 'tv-series';
    } else if (pathname === '/cartoons') {
        return 'cartoon';
    } else {
        return 'movie';
    }
}