
module.exports.area = function (radius) {
    return Math.pow(radius, 2) * Math.PI;
}

module.exports.circumference = function (radius) {
    return radius * 2 * Math.PI;
}