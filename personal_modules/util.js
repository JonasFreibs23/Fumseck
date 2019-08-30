module.exports.flatten = function (arr) {
    return Array.prototype.concat(...arr)
}

module.exports.isParamEmpty = function (obj){
  return (Object.entries(obj).length === 0 && obj.constructor === Object)
}

module.exports.getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
