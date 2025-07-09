//Debounce attempt 2

export default function debounce(func, wait){
    let timeoutId

    return function(...args) {
        clearTimeout(timeoutId);
        const context = this;

        timeoutId = setTimeout(function(){
            func.apply(context, args);
        }, wait)
    }
}