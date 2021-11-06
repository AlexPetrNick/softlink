function rentalCarCost(d) {
    let pay = 40 * d
    if (d >= 7) {
        return pay - 50
    } else if (d >=3) {
        return pay - 20
    } else {
        return pay
    }
}

console.log(rentalCarCost(3))