export function getTime(number: number): string {
    if (number >= 0) {
        const minutes = number % 60;
        const hours = (number - minutes) / 60;
        const formatMinutes = minutes < 10 ? `0${minutes}` : minutes

        if (hours <= 0) {
            return `${formatMinutes} мин.`;
        } else {
            return `${hours}ч. ${formatMinutes} мин.`;
        }
    } else {
        return '';
    }
}