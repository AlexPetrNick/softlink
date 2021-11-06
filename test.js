var greet = function(name) {
    let str = name.toLowerCase()
    return "Hello " + str.replace(str[0], str[0].toUpperCase()) + "!"
};

console.log(greet('riley'))