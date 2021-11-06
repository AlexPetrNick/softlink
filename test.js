function correct(string)
{
    let str = ''
    for (let i of string) {
        if (i === "5") {
            str += "S"
        } else if (i === "1") {
            str += "I"
        } else if (i === "0") {
            str += "O"
        } else {
            str += i
        }

    }
    return str
}

console.log(correct("51NGAP0RE"))