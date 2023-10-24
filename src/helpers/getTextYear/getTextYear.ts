export const getTextYear = (num: number) => {
    const remains = num % 10;

    if (num === 1 || remains === 1) {
        return 'год';
    } else if (num > 1 && num < 5) {
        return 'года';
    } else if (num > 4 && num <= 20) {
        return 'лет';
    } else if (remains > 1 && remains < 5) {
        return 'года';
    } else if ((remains > 4 && remains <= 9) || remains === 0) {
        return 'лет';
    } else {
        return '';
    }
}