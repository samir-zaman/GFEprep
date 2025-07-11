//Debounce attempt 1 - unsuccessful

export default function debounce(func, wait) {
    let timeoutId

    return function (...args) {
        const context = this; //preserve context
        clearTimeout(timeoutId); //clears previous timer if debounce is invoked a second time

        setTimeout(() => {
            func(...args);
        }, wait);
    };
}