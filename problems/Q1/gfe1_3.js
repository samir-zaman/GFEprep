//Debounce attempt 3 - successful

export default function debounce(func, wait) {
    let timeoutId;

    return function(...args){
        clearTimeout(timeoutId);
        const context = this;

        timeoutId = setTimeout(
            () => func.apply(context, args),
            wait
        )
    }
}