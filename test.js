function doubleChar(str) {
    let strReady = ''
    for (let i of str) {
        strReady += i+i
    }
    return strReady
}


console.log(doubleChar("abcd"))