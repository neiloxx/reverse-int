module.exports = function reverse (n) {
    let newNum = '';
    n = Math.abs(n).toString();
    for (let i = n.length - 1; i >= 0; i--){
        newNum += n[i];
    }
    return newNum;
}
