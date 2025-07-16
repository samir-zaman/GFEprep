//Debounce attempt 4 - successful

export default function(func, wait) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        const context = this;

        timeoutId = setTimeout(
            () => func.apply(this, args),
            wait
        )
    }
}