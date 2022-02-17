module.exports = function reverse (n) {
    return n > 0 ? +[...n+''].reverse().join("") : +[...-n+''].reverse().join("")
}