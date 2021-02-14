var reserve = function (fromOrDestination, toOrDestination, destination) {
    if (fromOrDestination instanceof Date &&
        toOrDestination instanceof Date &&
        destination !== undefined) {
    }
    else if (fromOrDestination instanceof Date &&
        typeof toOrDestination === 'string') {
    }
    else if (typeof fromOrDestination === 'string') {
    }
};
function fill(num, ch) {
    var i = 0;
    while (i < num) {
        console.log(ch);
        i++;
    }
}
function call(f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return f.apply(void 0, args);
}
var a = call(fill, 5, 'a');
a;
//# sourceMappingURL=exercises.js.map