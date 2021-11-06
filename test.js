const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    let difference = strokes - par
    console.log(difference)
    if (strokes === 1) {
        return names[0]
    } else if (difference <= -2) {
        return names[1]
    } else if (difference === -1) {
        return names[2]
    } else if (difference === 0) {
        return names[3]
    } else if (difference === 1) {
        return names[4]
    } else if (difference === 2) {
        return names[5]
    } else if (difference >= 3) {
        return names[6]
    }
}

console.log(golfScore(5, 5))