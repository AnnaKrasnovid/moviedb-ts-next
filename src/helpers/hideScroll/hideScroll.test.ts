export function hideScroll(state: boolean): void {
    if (state === true) {
        document.body.classList.add('hide-scroll');
    } else {
        document.body.classList.remove('hide-scroll');
    }
};