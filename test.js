function array(arr){
    arr = arr.split(',')
    if (arr.length > 2) {
        arr.splice(0, 1)
        arr.splice(arr.length - 1, 1)
        return arr.join(' ')
    } else {
        return null
    }
}
