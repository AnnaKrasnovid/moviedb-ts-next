export function getError(movie: any, params: any, message: string) {
    if (movie.status) {
        if (movie.status < 200 || movie.status >= 300) {
            params = movie.status;
            message = `Ошибка: ${movie.status}, ${movie.message}`;
        }
    }
}