// Closures means that the inner functions have access to the outer functions. Scoping

module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`))
    } else {
        setTimeout(() =>
            //pass in null meaning there is no Error.
            // the x nad y are accessed from the outer function, thats why we don't include them in the parameters of perimeter or area.
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        )
    }
}

